import React from "react";
import nextArrow from "../../assets/images/nextArrrow.png";
import "./ExtendBox.css";

const makeFirstLetterCap = (str) => {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
};

export default function ExtendBox({ title }) {
  return (
    <div className="extend-box">
      <div className="extend-box-items">
        <div className="even-space-row">
          <h1 className="option-title">{makeFirstLetterCap(title)}</h1>
          <img src={nextArrow} alt="next-arrow" className="next-arrow" />
        </div>
        <div>
          <p className="option-para">Please Choose {title}</p>
        </div>
      </div>
    </div>
  );
}
