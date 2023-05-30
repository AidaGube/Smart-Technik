import React, { useContext, useState } from "react";
import menuIcon0 from "../../assets/images/catalog-icons/menu-0.svg";
import menuIcon1 from "../../assets/images/catalog-icons/menu-1.svg";
import menuIcon2 from "../../assets/images/catalog-icons/menu-2.svg";
import menuIcon3 from "../../assets/images/catalog-icons/menu-3.svg";
import menuIcon4 from "../../assets/images/catalog-icons/menu-4.svg";
import menuIcon5 from "../../assets/images/catalog-icons/menu-5.svg";
import menuIcon6 from "../../assets/images/catalog-icons/menu-6.svg";
import menuIcon7 from "../../assets/images/catalog-icons/menu-7.svg";
import menuIcon8 from "../../assets/images/catalog-icons/menu-8.svg";
import menuIcon9 from "../../assets/images/catalog-icons/menu-9.svg";
import menuIcon10 from "../../assets/images/catalog-icons/menu-10.svg";
import { useNavigate } from "react-router-dom";
import { modalContext } from "../../context/modalContext";
const catalogItems = [
  {
    title: "Гироскутеры",
    img: menuIcon0,
    id: 1,
  },
  {
    title: "Электросамокаты",
    img: menuIcon1,
    id: 2,
  },
  {
    title: "Моноколеса",
    img: menuIcon2,
    id: 3,
  },
  {
    title: "Сигвеи и мини-сигвеи",
    img: menuIcon3,
    id: 4,
  },
  {
    title: "Электроскутеры",
    img: menuIcon4,
    id: 5,
  },
  {
    title: "Электровелосипеды",
    img: menuIcon5,
    id: 6,
  },
  {
    title: "Электроскейты",
    img: menuIcon6,
    id: 7,
  },
  {
    title: "Электромобили",
    img: menuIcon7,
    id: 8,
  },
  {
    title: "Аксессуары",
    img: menuIcon8,
    id: 9,
  },
  {
    title: "Умные игрушки",
    img: menuIcon9,
    id: 10,
  },
  {
    title: "Smart Watch",
    img: menuIcon10,
    id: 11,
  },
];
export const CatologDropdown = () => {
  const { changeCatalogState, catalog } = useContext(modalContext);
  const [activeItem, setActiveItem] = useState(0);

  const navigate = useNavigate();

  const handleActiveItem = (id) => {
    setActiveItem(id);
    navigate(`/category/${id}`);
    changeCatalogState();
  };

  const renderedItem = catalogItems.map((item) => {
    return (
      <div
        onClick={() => handleActiveItem(item.id)}
        key={item.title}
        className={`dropdown__item ${activeItem === item.id ? "active" : ""}`}>
        <a>
          <img src={item.img} />
          <div className='catalog__item-title'>{item.title}</div>
        </a>
      </div>
    );
  });

  return (
    <div className={`catalog__dropdown ${catalog ? "active" : ""}`}>
      {renderedItem}
    </div>
  );
};
