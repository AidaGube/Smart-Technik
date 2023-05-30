import React, { useContext } from "react";
import { appContext } from "../../context/appContext";

export const DetailDescription = () => {
  const { detailProduct } = useContext(appContext);

  return (
    <div className='detail__description'>
      <div className='container'>
        <div className='description__content'>
          <div className='description__title'>
            Описание {detailProduct ? detailProduct.title : "Загрузка..."}
          </div>
          <p className='description__item'>
            {detailProduct ? detailProduct.description : "Загрузка..."}
          </p>
        </div>
      </div>
    </div>
  );
};
