import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";

export default function NavBar() {
  return (
    <div className="toolbar">
      <div className="title-box">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-icon"
          size="1x"
          transform="grow-4"
        />
        <h1 className="title">ORDER INFORMATION</h1>
      </div>
    </div>
  );
}
