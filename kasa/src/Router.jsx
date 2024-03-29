
import "./assets/fonts/static/Montserrat-Light.ttf";
import "./assets/fonts/static/Montserrat-Bold.ttf";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import NotFound from "./components/NotFound";
import Banner from "./components/Banner";
import { createBrowserRouter } from "react-router-dom";
//  
const router = createBrowserRouter([
  {
    element: <Banner/>,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound/>,
        loader: async ()=> {
          const {default: imgHome} = await import("./assets/IMG.png")
          return imgHome;
        },
      },
      {
        path: "/housing/:houseId",
        element: <Housing />,
        errorElement: <NotFound />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <NotFound />,
        loader: async ()=> {
          const {default: imgAbout} = await import("./assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png")
          return imgAbout;
        },
      },
    ]
  }
]);
export default router;
