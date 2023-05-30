import React from "react";
import { CreateForm } from "./CreateForm";
import "./style.css";

export const ProductCreate = () => {
  return (
    <div>
      <div className='container'>
        <div className='create__content'>
          <h1 className='create_header'>Создание товара</h1>
          <CreateForm />
        </div>
      </div>
    </div>
  );
};
