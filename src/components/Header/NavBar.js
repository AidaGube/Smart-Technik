import React, { useContext } from "react";
import { CatologDropdown } from "./CatologDropdown";
import { NavMenu } from "./NavMenu";
import menuiconIcon from "../../assets/images/menu-icon.svg";
import { modalContext } from "../../context/modalContext";

export const NavBar = () => {
  const { changeCatalogState } = useContext(modalContext);

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar__content'>
          <div className='catalog'>
            <div onClick={changeCatalogState} className='catalog__btn'>
              <img src={menuiconIcon} />
              <p>Каталог товаров</p>
            </div>
            <CatologDropdown />
          </div>
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
