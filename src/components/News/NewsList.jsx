import React, { useContext, useEffect } from "react";
import NewsItem from "./NewsItem";
import { appContext } from "../../context/appContext";
import "./style.css";

const NewsList = () => {
  const { news, getNews } = useContext(appContext);

  useEffect(() => {
    getNews();
  }, []);

  const renderedItems = news ? (
    news.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <NewsItem item={item} />
        </React.Fragment>
      );
    })
  ) : (
    <></>
  );

  return (
    <>
      <div className='news-mt'>
        <div className='news__container'>
          <div className='news__items'>{renderedItems}</div>
        </div>
      </div>
    </>
  );
};

export default NewsList;
