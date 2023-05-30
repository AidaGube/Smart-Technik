import React, { useContext } from "react";
import { UpdateForm } from "./UpdateForm";
import "./style.css";
import { appContext } from "../../context/appContext";

export const ProductUpdatePage = () => {
  const { detailProduct } = useContext(appContext);
  return (
    <div>
      <div className='container'>
        <div className='create__content'>
          <h1 className='create_header'>Редактирование товара</h1>
          <UpdateForm updateProduct={detailProduct} />
        </div>
      </div>
    </div>
  );
};
