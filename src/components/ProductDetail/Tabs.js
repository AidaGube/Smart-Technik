import React, { useState } from "react";
import { DetailDescription } from "./DetailDescription";
import { ProductCharacter } from "./ProductCharacter";
import { ProductReview } from "../Reviews/ProductReview";
import "./style.css";

export const Tabs = () => {
  const tabItems = [
    {
      id: 1,
      label: "Описание",
    },
    {
      id: 2,
      label: "Характеристики",
    },
    {
      id: 3,
      label: "Отзывы",
    },
  ];
  const [activeItem, setActiveItem] = useState(1);
  const handleActiveTabItem = (id) => {
    setActiveItem(id);
  };
  const components = [
    <DetailDescription />,
    <ProductCharacter />,
    <ProductReview />,
  ];

  const renderedItems = tabItems.map((tab) => (
    <div
      key={tab.id}
      className={`tabs__item ${activeItem === tab.id ? "active" : ""}`}
      onClick={() => handleActiveTabItem(tab.id)}>
      {/* {tab.id === 3 ? `${tab.label} (${reviews.length})` : tab.label} */}
      {tab.label}
    </div>
  ));

  return (
    <div className='tabs'>
      <div className='container'>
        <div className='tabs__content'>{renderedItems}</div>
      </div>
      {components[activeItem - 1]}
    </div>
  );
};
