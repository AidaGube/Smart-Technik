import React from "react";
import "./style.css";

export const Button = ({ text, defaultClassName }) => {
  return (
    <div className={`btn ${defaultClassName ? defaultClassName : ""}`}>
      {text}
    </div>
  );
};
