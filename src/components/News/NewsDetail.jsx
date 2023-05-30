import React, { useContext, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import NewsImg from "../../assets/images/news-img.svg";
import NewsMobile from "../../assets/images/NewsMobile.svg";
import "./style.css";
import { useParams } from "react-router-dom";
import { appContext } from "../../context/appContext";

const NewsDetail = () => {
  const { newsId } = useParams();

  const { getDetailNews, newsDetail } = useContext(appContext);

  useEffect(() => {
    getDetailNews(newsId);
  }, []);

  return (
    <div className='news__detail'>
      {newsDetail ? (
        <div className='container'>
          <h1 className='title__name-detail'>{newsDetail.title}</h1>
          <div className='detail-news'>
            <div className='detail-info'>
              <p className='detail-subtitle1'>{newsDetail.firstText}</p>
              <h2 className='detail-title'>Бонусы и акции в честь открытия </h2>
              <p className='detail-subtitle2'>{newsDetail.secondText}</p>
            </div>
            <div className='detail-img'>
              <img className='newsimg' src={newsDetail.image} />
              <img className='mobileImg' src={NewsMobile} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NewsDetail;
