
import { useState } from "react";
import PropTypes from "prop-types"
//
function Dropdown({ name, content }) {
  let [dropState, setState] = useState("close");
  let text ;
  typeof content !== "string" ? [...text] = content : text = content;
  const upArrow = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_122696_121)">
  <path d="M26.84 23.3466L29.2 20.9733L16 7.78662L2.80001 20.9866L5.16001 23.3466L16 12.5066L26.84 23.3466Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_122696_121">
  <rect width="32" height="32" fill="white" transform="translate(32) rotate(90)"/>
  </clipPath>
  </defs>
  </svg>;
  // 
  return (
    <div className="dropdown--container">
      <div className="title"
        onClick={() => {
          return dropState === "open" ? setState("close") : setState("open");
        }}
      >
        <h3>{name}</h3>
        <span className={`arrow--${dropState}`}>
          { upArrow }
        </span>
      </div>
      <div className={`drop--${dropState}`}>
        {
          typeof text !== "string" ? 
          <div className="appliance" >{text.map(str => (<span key={str}>{`${str}`}</span>))}</div> :
          <p className="description" > {text} </p> 
        }
      </div>
    </div>
  );
}
Dropdown.propTypes = {
  name : PropTypes.string,
  content : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
}
export default Dropdown