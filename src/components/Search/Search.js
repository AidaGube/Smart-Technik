import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../../context/appContext";
import { CategoryProductList } from "../ProductList/CategoryProductList";
import "./style.css";

export const Search = () => {
  const { searchedTerm } = useParams();
  const { searchedProducts, searchProduct } = useContext(appContext);

  useEffect(() => {
    searchProduct(searchedTerm);
  }, []);

  return (
    <div className='search__page'>
      <div className='search__page-content'>
        <div className='container'>
          <h1 className='search__page-title'>
            Результаты поиска по запросу <span>"{searchedTerm}"</span>{" "}
            {!searchedProducts.length ? "не найдены" : ""}
          </h1>
          <CategoryProductList products={searchedProducts} />
        </div>
      </div>
    </div>
  );
};
