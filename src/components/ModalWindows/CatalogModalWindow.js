import React, { useContext } from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { modalContext } from "../../context/modalContext";
import { CatologDropdown } from "../Header/CatologDropdown";

export const CatalogModalWindow = () => {
  const { changeCatalogState, catalog } = useContext(modalContext);

  return (
    <div className={`catalog__window modal__window ${catalog ? "active" : ""}`}>
      <div className='catalog__window-content'>
        <div className='catalog__window-header'>
          <p>Каталог</p>
          <img onClick={changeCatalogState} src={closeIcon} />
        </div>
        <div>
          <CatologDropdown />
        </div>
      </div>
    </div>
  );
};
