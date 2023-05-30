import React, { useContext } from "react";
import { appContext } from "../../context/appContext";
import { ProductItem } from "./ProductItem";
import "./style.css";

export const CategoryProductList = ({ products }) => {
  return (
    <div className='products__list'>
      {products.length ? (
        products.map((item) => (
          <React.Fragment key={item.id}>
            <ProductItem product={item} />
          </React.Fragment>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
