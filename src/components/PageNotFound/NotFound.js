import React from "react";
import "./style.css";

export const NotFound = () => {
  return (
    <div className='notfount'>
      <div className='container'>
        <div className='notfount__content'>
          <h1 className='notfount__header'>{"Страница не найдена (>_<)"}</h1>
        </div>
      </div>
    </div>
  );
};
