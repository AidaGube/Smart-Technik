import React, { useContext, useEffect } from "react";
import { CategoryProductList } from "../components/ProductList/CategoryProductList";
import { useParams } from "react-router-dom";
import { appContext } from "../context/appContext";
import { Category } from "../components/Category/Category";

export const CategoryPage = () => {
  const { category } = useParams();
  const { products, fetchCategoryProducts } = useContext(appContext);
  useEffect(() => {
    fetchCategoryProducts(category);
  }, [category]);

  return <Category />;
};
