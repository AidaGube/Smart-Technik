import React, { useContext, useState } from "react";
import logoIcon from "../../assets/images/logo.svg";
import SideBar from "../ProfileSideBar/SideBar";
import searchIcon from "../../assets/images/search-icon.svg";
import { Button } from "../Buttons/Button";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { HeaderIcons } from "./HeaderIcons";
import { useAdmin } from "../../hooks/useAdmin";
import { modalContext } from "../../context/modalContext";
import "./style.css";

export const Header = () => {
  const [showUserDatePopup, setShowUserDatePopup] = useState(false);

  const { changeSigninState, changeSearchState } = useContext(modalContext);

  const user = useUser();
  const isAdmin = useAdmin();

  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='header__content'>
            <div className='header__logo'>
              <Link to='/'>
                <img src={logoIcon} />
              </Link>
            </div>
            <div className='header__info'>
              <div className='header__info-contacts'>
                <ul className='contacts'></ul>
                <div onClick={changeSearchState} className='search__btn'>
                  <img src={searchIcon} />
                  Поиск
                </div>
              </div>
              <div className='header__menu'>
                <div className='header__link-icons'>
                  <HeaderIcons />
                </div>
                {!user ? (
                  <div onClick={changeSigninState}>
                    <Button defaultClassName='header__btn' text='Войти' />
                  </div>
                ) : (
                  <div className={`avatar ${isAdmin ? "admin" : ""}`}>
                    <img
                      onClick={() => setShowUserDatePopup(!showUserDatePopup)}
                      className='user__avatar'
                      src={user.photoURL}
                    />
                    <SideBar
                      defaultClass={`on__header ${
                        !showUserDatePopup ? "active" : ""
                      }`}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <NavBar />
      </div>
    </>
  );
};
