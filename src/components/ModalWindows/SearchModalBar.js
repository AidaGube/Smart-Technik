import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import closeIcon from "../../assets/images/close-icon.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { modalContext } from "../../context/modalContext";
export const SearchModalBar = () => {
  const { searchProduct, searchedProducts } = useContext(appContext);
  const { changeSearchState, search } = useContext(modalContext);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const navigateToSearchedProduct = (id) => {
    navigate(`/product/${id}`);
    setTerm("");
    changeSearchState();
  };

  useEffect(() => {
    searchProduct(term);
  }, [term]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm("");
    navigate(`/search/products/${term}`);
    changeSearchState();
  };

  const renderedSearchItems = searchedProducts.map((searchItem) => {
    return (
      <React.Fragment key={searchItem.id}>
        {term ? (
          <div
            onClick={() => navigateToSearchedProduct(searchItem.id)}
            className='searched__results-item'>
            {searchItem.title}
          </div>
        ) : (
          <></>
        )}
      </React.Fragment>
    );
  });

  return (
    <div className={`search__window modal__window ${search ? "active" : ""}`}>
      <div className='search__bar'>
        <div className='search__bar-content container'>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setTerm(e.target.value)}
              placeholder='Введите запрос, например «Smart balance»'
              type='text'
              value={term}
            />
          </form>
          <div className='search__bar-header'>
            <p>Поиск</p>
            <img
              className='close-icon'
              onClick={changeSearchState}
              src={closeIcon}
            />
          </div>
          <div className='searched__results'>{renderedSearchItems}</div>
        </div>
      </div>
    </div>
  );
};
