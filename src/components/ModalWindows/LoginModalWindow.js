import React, { useContext, useState } from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { Button } from "../Buttons/Button";
import { ButtonImg } from "../Buttons/ButtonImg";
import googleIcon from "../../assets/images/google.svg";

import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../firebase/config";

import "./style.css";
import { modalContext } from "../../context/modalContext";
import { appContext } from "../../context/appContext";
import { useUser } from "../../hooks/useUser";

export const LoginModalWindow = () => {
  const { signin, changeSigninState, changeSignupState } =
    useContext(modalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    provider.setCustomParameters({ prompt: "select_account" });
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Вы вошли в аккаунт:", result.user.email);
        changeSigninState();
      })
      .catch((error) => {
        console.log("Server error", error.message);
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Вы войшли в аккаунт:" + userCredential.user.displayName);
        changeSigninState();
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className={`login__modal modal__window ${signin ? "active" : ""}`}>
      <div className='login__modal-content'>
        <div className='content__header'>
          <div className='header__text'>Вход</div>
          <img
            onClick={changeSigninState}
            className='close-icon'
            src={closeIcon}
          />
        </div>
        <div onClick={handleSignIn}>
          <ButtonImg
            image={googleIcon}
            text='Войти с помощью Google'
            defaultClassName='light with__google'
          />
        </div>
        <form onSubmit={handleLogin} className='login__form'>
          <div className='form__input'>
            <label>Эл. почта или телефон</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
            />
          </div>
          <div className='form__input'>
            <label>Пароль</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
            />
          </div>
          <div className='form__text'>Забыли пароль?</div>
          <label className='form__checkbox'>
            <input type='checkbox' />
            <span>Запомнить меня</span>
          </label>
          <div onClick={(e) => handleLogin(e)}>
            <Button text='Войти' defaultClassName='form__button' />
          </div>
          <div
            onClick={() => {
              changeSignupState();
              changeSigninState();
            }}
            className='form__text center'>
            Зарегистрироваться
          </div>
        </form>
      </div>
    </div>
  );
};
