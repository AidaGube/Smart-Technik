import React, { useContext } from "react";
import { appContext } from "../../context/appContext";

export const ProductCharacter = () => {
  const { detailProduct } = useContext(appContext);

  // const renderedItems = detailProduct.characteristic.map((item) => {
  //   return (
  //     <div className='table__item'>
  //       <div className='table__title table__item-c'>Тип:</div>
  //       <div className='table__answer table__item-c'>{item}</div>
  //     </div>
  //   );
  // });
  const characteristic = detailProduct.characteristic;
  return (
    <div className='detail__character'>
      <div className='container'>
        <div className='character__content'>
          <div className='description__title'>
            Характеристики гироскутера Smart Balance Well 6.5
          </div>
          <div className='character__table'>
            <div className='table__item'>
              <div className='table__title table__item-c'>Тип:</div>
              <div className='table__answer table__item-c'>
                {characteristic.type}
              </div>
            </div>
            <div className='table__item'>
              <div className='table__title table__item-c'>
                Макс. скорость до (км/ч):
              </div>
              <div className='table__answer table__item-c'>
                {characteristic.speed}
              </div>
            </div>
            <div className='table__item'>
              <div className='table__title table__item-c'>
                Мощность двигателя:
              </div>
              <div className='table__answer table__item-c'>
                {characteristic.power}
              </div>
            </div>
            <div className='table__item'>
              <div className='table__title table__item-c'>
                Пробег на одном заряде:
              </div>
              <div className='table__answer table__item-c'>
                {characteristic.mileagePerCharge}
              </div>
            </div>
            <div className='table__item'>
              <div className='table__title table__item-c'>
                Тип переднего тормоза:
              </div>
              <div className='table__answer table__item-c'>
                {characteristic.breakeType}
              </div>
            </div>
            <div className='table__item'>
              <div className='table__title table__item-c'>Круиз-контроль:</div>
              <div className='table__answer table__item-c'>
                {characteristic.control}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
