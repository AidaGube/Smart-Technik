import React, { useContext, useEffect } from "react";
import NewsList from "../components/News/NewsList";
import { appContext } from "../context/appContext";

const NewsPage = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='title__name'>Новости</h1>
        <NewsList />
      </div>
    </div>
  );
};

export default NewsPage;
