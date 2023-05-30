import React from "react";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";
import "../components/Profile/profile-title.css";
import "../components/Profile/profile-nav.css";
import { Button } from "../components/Buttons/Button";
import "../components/Profile/ProfileChangePass.css";
import { Link } from "react-router-dom";

const profileList = [
  {
    title: "Общие сведения",
    link: "/user/profilemain",
  },
  {
    title: "Личные данные",
    link: "/user/perconaldata",
  },
  {
    title: "История покупок",
    link: "/user/profilehistory",
  },
  {
    title: "Избранное",
    link: "",
  },
  {
    title: "Сменить пароль",
    link: "/user/profilechange",
  },
  {
    title: "Выйти",
    link: "/",
  },
];

const ProfileChangePass = () => {
  return (
    <>
      <div className='container'>
        <div className='profile-nav'>
          <Link to='/'>
            <h4>Главная</h4>
          </Link>
          <svg
            width='6'
            height='11'
            viewBox='0 0 6 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M5.68907 5.20829C5.85749 5.3663 5.85749 5.6337 5.68907 5.79171L0.673684 10.4971C0.418255 10.7368 1.378e-07 10.5557 1.33623e-07 10.2054L2.14003e-08 0.794595C1.72237e-08 0.444349 0.418255 0.263239 0.673684 0.502881L5.68907 5.20829Z'
              fill='#070C11'
            />
          </svg>
          <Link to='/profilemain'>
            <h4>Личный кабинет</h4>
          </Link>
          <svg
            width='6'
            height='11'
            viewBox='0 0 6 11'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M5.68907 5.20829C5.85749 5.3663 5.85749 5.6337 5.68907 5.79171L0.673684 10.4971C0.418255 10.7368 1.378e-07 10.5557 1.33623e-07 10.2054L2.14003e-08 0.794595C1.72237e-08 0.444349 0.418255 0.263239 0.673684 0.502881L5.68907 5.20829Z'
              fill='#070C11'
            />
          </svg>
          <Link to='/profilechange'>
            <h4>Сменить пароль</h4>
          </Link>
        </div>
        <div className='profile-title'>
          <h3>Сменить пароль</h3>
        </div>
        <div className='profil-hero'>
          <div className='profile-SideBar'>
            <ProfileSideBar profileList={profileList} />
          </div>
          <div className='percona-Change'>
            <div>
              <div class='column'>
                <div class='ui form'>
                  <div class='field'>
                    <label>Введите старый пароль</label>
                    <div class='ui left icon input'>
                      <input
                        type='password'
                        placeholder='Введите старый пароль'
                      />
                      <i class='lock icon'></i>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z'
                          stroke='#070C11'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
                          stroke='#070C11'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                  <div class='field'>
                    <label>Введите новый пароль</label>
                    <div class='ui left icon input'>
                      <input
                        type='password'
                        placeholder='Введите новый пароль'
                      />
                      <i class='lock icon'></i>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z'
                          stroke='#070C11'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
                          stroke='#070C11'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                  <div class='field'>
                    <label>Повторите новый пароль</label>
                    <div class='ui left icon input'>
                      <input
                        type='password'
                        placeholder='Повторите новый пароль'
                      />
                      <i class='lock icon'></i>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z'
                          stroke='#070C11'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
                          stroke='#070C11'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                    </div>
                    <Button defaultClassName='btn' text='Сохранить изменения' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileChangePass;
