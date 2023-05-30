import React from "react";
import compareIcon from "../../assets/images/compare.svg";
import cartIcon from "../../assets/images/cart.svg";
import eyeIcon from "../../assets/images/eye.svg";
import hearthIcon from "../../assets/images/hearth.svg";
import { Link } from "react-router-dom";
export const HeaderIcons = () => {
  return (
    <>
      <Link to='/user/favorite'>
        <img className='header__icon' src={hearthIcon} />
      </Link>
      <Link to='/'>
        <img className='header__icon' src={compareIcon} />
      </Link>
      <Link to='/card'>
        <img className='header__icon cart' src={cartIcon} />
      </Link>
    </>
  );
};
