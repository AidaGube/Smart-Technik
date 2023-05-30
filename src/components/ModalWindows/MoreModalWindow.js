import React, { useContext } from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { modalContext } from "../../context/modalContext";
import { HeaderIcons } from "../Header/HeaderIcons";
import { NavMenu } from "../Header/NavMenu";
import "./style.css";

export const MoreModalWindow = () => {
  const { changeMoreState, more } = useContext(modalContext);

  return (
    <div className={`more__window modal__window ${more ? "active" : ""}`}>
      <div className='more__window-content'>
        <div className='content__header'>
          <p>Ещё</p>
          <img onClick={changeMoreState} src={closeIcon} />
        </div>
        <div className='more__icons'>
          <HeaderIcons />
        </div>
        <NavMenu />
      </div>
    </div>
  );
};
