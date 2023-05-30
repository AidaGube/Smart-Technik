import React from "react";
import "../components/Profile/profile-title.css";
import "../components/Profile/profile-nav.css";
import { Button } from "../components/Buttons/Button";
import "../components/Profile/profilePerconalData.css";
import { Link } from "react-router-dom";
import SideBar from "../components/ProfileSideBar/SideBar";
import ProfileSideBar from "../components/ProfileSideBar/ProfileSideBar";
import { useUser } from "../hooks/useUser";

const ProfilePerconalData = () => {
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

  const user = useUser();
  // console.log(user.uid.);
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
          <Link to='/perconaldata'>
            <h4>Личные данные</h4>
          </Link>
        </div>
        <div className='profile-title'>
          <h3>Личные данные</h3>
        </div>
        <div className='profil-hero'>
          <div className='profile-SideBar'>
            <ProfileSideBar profileList={profileList} />
          </div>
          <div className='percona-data'>
            <form className='ui form'>
              <div className='field'>
                <div className='two fields'>
                  <div className='field'>
                    <label>Имя</label>
                    <input
                      type='text'
                      name='shipping[first-name]'
                      placeholder='Укажите Имя'
                      value={user.displayName}
                    />
                  </div>
                  <div className='field'>
                    <label>Адрес</label>
                    <input
                      type='text'
                      name='shipping[last-name]'
                      placeholder='Не указан'
                      // value={user.}
                    />
                  </div>
                </div>
                <div className='two fields'>
                  <div className='field'>
                    <label>Эл. почта</label>
                    <input
                      type='email'
                      name='shipping[first-name]'
                      placeholder='Укажите @mail'
                      value={user.email}
                    />
                  </div>
                  <div className='field'>
                    <label>Предпочитаемый способ оплаты</label>
                    <select className='ui fluid dropdown'>
                      <option value=''>Выберите способ оплаты</option>
                      <option value=''>Налик</option>
                      <option value='AL'>Битховин</option>
                      <option value='AK'>Карта</option>
                      <option value='AZ'>Забрать у бомжа</option>
                      <option value='AR'>Попросить у друга</option>
                      <option value='NM'>Отжать у Илона Маска</option>
                      <option value='NY'>Накопить</option>
                      <option value='NC'>Разбить компилку</option>
                    </select>
                  </div>
                </div>
                <div className='two fields'>
                  <div className='field'>
                    <label>Телефон</label>
                    <input
                      type='tel'
                      name='shipping[first-name]'
                      placeholder='+996(###)### ###'
                    />
                  </div>
                  <div className='field'>
                    <label>Предпочитаемый способ доставки</label>
                    <select className='ui fluid dropdown'>
                      <option value='TN'>Не указан</option>
                      <option value='TX'>Лошадьми</option>
                      <option value='UT'>Авия-доставка</option>
                      <option value='VT'>Истребитель</option>
                      <option value='VA'>Телепорт</option>
                      <option value='WA'>Попутками</option>
                      <option value='WV'>Почтой</option>
                      <option value='WI'>Братишка</option>
                      <option value='WY'>Собаками</option>
                    </select>
                  </div>
                </div>
                <div className='two fields'>
                  <div className='field'>
                    <label>Город</label>
                    <input
                      type='text'
                      name='shipping[first-name]'
                      placeholder='Санкт-Петербург'
                      // value={user.}
                    />
                  </div>
                  <div className='field'>
                    <label>Аватар</label>
                    <input
                      id='identified'
                      className='percona-data__avatar'
                      type='file'
                      name='shipping[last-name]'
                    />
                  </div>
                </div>
                <div className='two fields'>
                  <div className='field'>
                    <label>Индекс</label>
                    <input
                      type='text'
                      name='shipping[first-name]'
                      placeholder='00000'
                    />
                  </div>
                  <div className='field'>
                    <Button defaultClassName='btn' text='Сохранить' />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePerconalData;
