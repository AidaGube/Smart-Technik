import React from "react";
import { Link } from "react-router-dom";
import "./ProfileSideBar.css";

const ProfileSideBar = ({ profileList }) => {
  const renderedProfileList = profileList.map((profileLis) => {
    return (
      <li key={profileLis.title}>
        <Link to={profileLis.link}>{profileLis.title}</Link>
      </li>
    );
  });

  return (
    <>
      <ul className='profileList'>
        <ul className='profileList__items'>{renderedProfileList}</ul>
      </ul>
    </>
  );
};

export default ProfileSideBar;
