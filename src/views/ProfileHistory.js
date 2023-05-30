import React from "react";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";
import "../components/Profile/profile-title.css";
import "../components/Profile/profile-nav.css";
import { Button } from "../components/Buttons/Button";
import Accordion from "../components/Accordion/Accordion";
import "../components/Profile/profileHistory.css";
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

const items = [
  {
    id: 1,
    title: "9",
    data: "04.07.2021",
    amount: "товар на сумму 9990 ₽",
    content: "Тут контент",
    expectation: "Выполнен",
  },
  {
    id: 2,
    title: "9",
    data: "04.07.2021",
    amount: "товар на сумму 1000 ₽",
    content: "Тут контент",
    expectation: "Выполнен",
  },
  {
    id: 3,
    title: "9",
    data: "04.07.2021",
    amount: "товар на сумму 1500 ₽",
    content: "Тут контент",
    expectation: "Выполнен",
  },
  {
    id: 4,
    title: "9",
    data: "04.07.2021",
    amount: "товар на сумму 1700 ₽",
    content: "Тут контент",
    expectation: "Выполнен",
  },
  {
    id: 5,
    title: "9",
    data: "04.07.2021",
    amount: "товар на сумму 6000 ₽",
    content: "Тут контент",
    expectation: "Выполнен",
  },
];

const ProfileHistory = () => {
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
          <Link to='/profilehistory'>
            <h4>История покупок</h4>
          </Link>
        </div>
        <div className='profile-title'>
          <h3>История покупок</h3>
        </div>
        <div className='profil-hero'>
          <div className='profile-SideBar'>
            <ProfileSideBar profileList={profileList} />
          </div>
          <div className='profile-accordion'>
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHistory;
