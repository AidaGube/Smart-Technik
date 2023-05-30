import React, { useContext, useState } from "react";
import arrowIcon from "../../assets/images/arrow-down.svg";
import { appContext } from "../../context/appContext";

export const FormDropDown = () => {
  const [showDropdownList, setShowDropdownList] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const { changeCategory } = useContext(appContext);

  const dropdownItems = [
    {
      title: "Гироскутеры",
      id: 1,
    },
    {
      title: "Электросамокаты",
      id: 2,
    },
    {
      title: "Моноколеса",
      id: 3,
    },
    {
      title: "Сигвеи и мини-сигвеи",
      id: 4,
    },
    {
      title: "Электроскутеры",
      id: 5,
    },
    {
      title: "Электровелосипеды",
      id: 6,
    },
    {
      title: "Электроскейты",
      id: 7,
    },
    {
      title: "Электромобили",
      id: 8,
    },
    {
      title: "Аксессуары",
      id: 9,
    },
    {
      title: "Умные игрушки",
      id: 10,
    },
    {
      title: "Smart Watch",
      id: 11,
    },
  ];

  const renderDropdownItms = dropdownItems.map((item) => (
    <li
      key={item.id}
      onClick={() => handleActiveItem(item.id)}
      className={`list__item ${activeItem === item.id ? "active" : ""}`}>
      {item.title}
    </li>
  ));

  const handleShowDropdown = () => {
    setShowDropdownList(!showDropdownList);
  };
  const handleActiveItem = (id) => {
    changeCategory(`${id}`);
    setActiveItem(id);
    handleShowDropdown();
  };

  return (
    <div className='create__input dropdown'>
      <label className='input__label'>Выберите категорию</label>
      <div onClick={handleShowDropdown} className='input__dropdown'>
        {dropdownItems[activeItem - 1].title}
        <img src={arrowIcon} />
      </div>
      <div className={`dropdown__list ${showDropdownList ? "active" : ""}`}>
        <ul>{renderDropdownItms}</ul>
      </div>
    </div>
  );
};
