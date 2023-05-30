import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../../context/appContext";
import { CategoryProductList } from "../ProductList/CategoryProductList";
import arrowIcon from "../../assets/images/arrow.svg";
import "./style.css";

const categoryItem = [
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

export const Category = () => {
  const { category } = useParams();
  const { products, fetchCategoryProducts } = useContext(appContext);
  useEffect(() => {
    fetchCategoryProducts(category);
  }, [category]);
  return (
    <div className='category'>
      <div className='container'>
        <div className='category__content'>
          <h1>
            Категории <img src={arrowIcon} />{" "}
            <span>{categoryItem[category - 1].title}</span>
          </h1>
          <CategoryProductList products={products} />
        </div>
      </div>
    </div>
  );
};
