import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { appContext } from "../../context/appContext";
import { useUser } from "../../hooks/useUser";
import { Button } from "../Buttons/Button";
import { CategoryProductList } from "../ProductList/CategoryProductList";
import SideBar from "../ProfileSideBar/SideBar";
import "./style.css";

export const Favorite = () => {
  const { getFavoriteProducts, favorite } = useContext(appContext);

  const user = useUser();

  useEffect(() => {
    getFavoriteProducts();
  }, []);

  if (!favorite.length) {
    return (
      <div className='empty container'>
        <h1 className='favorite__title'>
          Здесь пусто поскольку вы не добавили ни один товар в избранные
        </h1>
        <p className='favorite__text'>
          Чтобы добавить товар в избранные вернитесь на главную страницу
        </p>
        <Link to='/'>
          <Button text='Вернуться' defaultClassName='back' />
        </Link>
      </div>
    );
  }

  return (
    <div className='favorite'>
      <div className='container'>
        <h1 className='favorite__title'>Избранное</h1>
        <div className='favorite__content'>
          {user ? (
            <div className='favorite__sidebar'>
              <SideBar />
            </div>
          ) : (
            <div></div>
          )}

          <div className='favorite__item'>
            <CategoryProductList products={favorite} />
          </div>
        </div>
      </div>
    </div>
  );
};
