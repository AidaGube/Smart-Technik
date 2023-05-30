import React from "react";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";
import "../components/Profile/profile-title.css";
import "../components/Profile/profile-nav.css";
import { Button } from "../components/Buttons/Button";
import avatar from "../assets/images/avatar.svg";
import "../components/Profile/profileMain.css";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { format, toDate } from "date-fns";

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

const ProfileMain = () => {
  const user = useUser();
  // console.log(user.metadata.createdAt);

  // const time = format(user.metadata.createdAt.toDate(), "yyyy-MM-dd");

  // console.log(time);

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
          <Link to='/profilemain'>
            <h4>Общие сведения</h4>
          </Link>
        </div>
        <div className='profile-title'>
          <h3>Общие сведения</h3>
        </div>
        <div className='profil-hero'>
          <div className='profile-SideBar'>
            <ProfileSideBar profileList={profileList} />
          </div>
          <div className='profile-main'>
            <div className='profile-main__row'>
              <h4>{user.displayName}</h4>
              <div className='profile-main__info-avatart'>
                <img src={user.photoURL} />
                <div className='profile-main__info'>
                  <div>
                    Дата регистрации: <span>{user.metadata.creationTime}</span>
                  </div>
                  {/* <div>
                    Заказов:<span>1</span>
                  </div> */}
                </div>
              </div>
              <p>
                Добро пожаловать в панель управления. Здесь вы можете изменить
                свои регистрационные данные и cменить пароль. Зарегистрированные
                пользователи имеют доступ к истории заказов и возможность
                добавлять в избранное товары для будущих покупок.
              </p>
            </div>
            <Button defaultClassName='btn' text='Панель управления' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMain;
