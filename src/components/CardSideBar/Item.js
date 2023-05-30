import React from "react";

const Item = ({ sibeBars }) => {
  const renderedBar = sibeBars.map((sideBar) => {
    return (
      <div key={sideBar.id} className="bar-content">
        <div>
          <p className="bar-sum">{sideBar.title} товара на сумму</p>
          <p className="sum-price">{sideBar.price} ₽</p>
        </div>
        <div className="bar-content-div">
          <p className="cost">{sideBar.content}</p>
          <p className="delivery">{sideBar.delivery}</p>
        </div>
        <div className="bar-pay">
          <h4>{sideBar.subtitle}</h4>
          <p className="total-price">{sideBar.price} ₽</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="sideBar">
        <h2>Итог</h2>
        <div>{renderedBar}</div>
      </div>
    </div>
  );
};

export default Item;
