import React from "react";

export const ButtonImg = ({
  image,
  defaultClassName,
  text,
  onClickFunction,
}) => {
  return (
    <div onClick={onClickFunction} className={`btn  image ${defaultClassName ? defaultClassName : ""}`}>
      <img src={image} />
      {text ? text : ""}
    </div>
  );
};
