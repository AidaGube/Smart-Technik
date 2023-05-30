import React from "react";
import { NewsCreateForm } from "./NewsCreateForm";
import "./style.css";

export const NewsCreate = () => {
  return (
    <div className='news__create'>
      <div className='container'>
        <div className='create__content'>
          <h1 className='create_header'>Объявление новости</h1>
          <NewsCreateForm />
        </div>
      </div>
    </div>
  );
};
