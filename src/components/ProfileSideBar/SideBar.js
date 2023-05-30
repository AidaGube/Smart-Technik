import React from "react";
import "./ProfileSideBar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Navigate, useNavigate } from "react-router-dom";

const SideBar = ({ defaultClass }) => {
  const profileList = [
    {
      title: "Общие сведения",
      id: 1,
      link: "/user/profilemain",
    },
    {
      title: "Личные данные",
      link: "/user/perconaldata",
      id: 2,
    },
    {
      title: "История покупок",
      link: "",
      id: 3,
    },
    {
      title: "Избранное",
      link: "/user/profilechange",
      id: 4,
    },
    {
      title: "Сменить пароль",
      link: "/",
      id: 5,
    },
  ];
  const navigate = useNavigate();
  const handleLOgout = async () => {
    signOut(auth)
      .then(() => {
        console.log("Loged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleGoToLink = (link) => {
    navigate(`${link}`);
  };

  const renderedProfileList = profileList.map((profileLis) => {
    return (
      <li onClick={() => handleGoToLink(profileLis.link)} key={profileLis.id}>
        <a>{profileLis.title}</a>
      </li>
    );
  });

  return (
    <>
      <div className={`profileList ${defaultClass ? defaultClass : ""}`}>
        <ul className='profileList__items'>
          {renderedProfileList}
          <li onClick={handleLOgout}>
            <div>Выйти</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
