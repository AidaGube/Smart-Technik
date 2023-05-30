import React, { useContext, useEffect, useState } from "react";
import starIcon from "../../assets/images/star.svg";
import commentIcon from "../../assets/images/comment.svg";
import compareIcon from "../../assets/images/compare.svg";
import likeIcon from "../../assets/images/hearth-active.svg";
import hearthIcon from "../../assets/images/hearth.svg";
import shippingIcon from "../../assets/images/shipping.svg";
import purseIcon from "../../assets/images/purse.svg";
import { ButtonImg } from "../Buttons/ButtonImg";
import { Button } from "../Buttons/Button";
import { appContext } from "../../context/appContext";
import { Oval } from "react-loader-spinner";
import "./style.css";

export const ProductDetail = () => {
  const {
    detailProduct: product,
    setFavoriteProduct,
    reviews,
    getProductDetailFromFirebase,
  } = useContext(appContext);

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (product) {
      setIsLiked(product.isLiked);
    }
  }, []);

  const handleIsLiked = () => {
    setIsLiked(!isLiked);
    setFavoriteProduct(product);
  };

  return (
    <>
      {product ? (
        <div className='detail'>
          <div className='container'>
            <div className='detail__content'>
              <img className='detail__img' src={product.imageURL} />
              <div className='detail__info'>
                <div className='detail__title'>{product.title}</div>
                <div className='detail__interface'>
                  <div className='interface__header'>
                    <div className='product__item-info'>
                      <div className='info__raiting'>
                        <img src={starIcon} />
                        <img src={starIcon} />
                        <img src={starIcon} />
                        <img src={starIcon} />
                        <img src={starIcon} />
                      </div>
                      <div className='info__commit'>
                        <img src={commentIcon} />({reviews.length})
                      </div>
                    </div>
                    <div className='interface__btns'>
                      <div onClick={handleIsLiked}>
                        <ButtonImg
                          defaultClassName='light gray'
                          image={!isLiked ? likeIcon : hearthIcon}
                        />
                      </div>
                      <ButtonImg
                        defaultClassName='light gray'
                        image={compareIcon}
                      />
                    </div>
                  </div>
                  <div className='interface__footer'>
                    <div className='product__price'>{product.price} ₽</div>
                    <div className='footer__btns'>
                      <Button defaultClassName='footer__btn' text='В корзину' />
                      <Button
                        defaultClassName='footer__btn light'
                        text='Купить в 1 клик'
                      />
                    </div>
                  </div>
                </div>
                <div className='detail__method'>
                  <div className='order__method'>
                    <img src={shippingIcon} />
                    <div className='order__desc'>
                      <h4>Доставка</h4>
                      <p>
                        Доставим по Санкт-Петербургу в течение 2 часов
                        и бесплатно. Стоимость доставки в другие города
                        уточняйте у менеджера.
                      </p>
                    </div>
                  </div>
                  <div className='order__method'>
                    <img src={purseIcon} />
                    <div className='order__desc'>
                      <h4>Оплата</h4>
                      <p>
                        Принимаем к оплате как наличный, так и безналичный
                        расчёт. Возможна оплата электронными кошельками.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='container loading'>
            <Oval
              ariaLabel='loading-indicator'
              height={100}
              width={100}
              strokeWidth={3}
              color='#2A5275'
              secondaryColor='#838688'
            />
          </div>
        </div>
      )}
    </>
  );
};
