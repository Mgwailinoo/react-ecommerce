import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
function Error() {
  return (
    <div className="mainbox">
      <div className="err">4</div>
      <svg
        width="192px"
        height="192px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#1a1919"
        stroke="#1a1919"
        transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fill="none"
            stroke="#fd1739"
            stroke-width="2"
            d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,15 L12,14 C12,13 12,12.5 13,12 C14,11.5 15,11 15,9.5 C15,8.5 14,7 12,7 C10,7 9,8.26413718 9,10 M12,16 L12,18"
          ></path>{" "}
        </g>
      </svg>
      <div className="err2">4</div>
      <div className="msg">
        Maybe this page Never have or deleted?
        <p>
          Let's go <Link to="/">home</Link> and try from there.
        </p>
      </div>
    </div>
  );
}

export default Error;
