import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import "./style.css";

const NewsItem = ({ item }) => {
  return (
    <div className='news__items col-6'>
      <div className='news__item'>
        <div className='news-order'>
          <div className='news__image'>
            <img className='news-img' src={item.image} />
          </div>
          <div className='news__description'>
            <div className='news__header'>
              <div className='news__title'>{item.title}</div>
            </div>

            <div className='news__subtitle'>{item.firstText}</div>

            <div className='news__footer'>
              <Link className='nav-link' to={`/news/${item.id}`}>
                <span className='news__ar'>
                  Подробнее
                  <svg
                    className='news__ar-svg'
                    width='6'
                    height='11'
                    viewBox='0 0 6 11'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M5.68907 5.20829C5.85749 5.3663 5.85749 5.6337 5.68907 5.79171L0.673684 10.4971C0.418255 10.7368 1.378e-07 10.5557 1.33623e-07 10.2054L2.14003e-08 0.794595C1.72237e-08 0.444349 0.418255 0.263239 0.673684 0.502881L5.68907 5.20829Z'
                      fill='#2A5275'
                    />
                  </svg>
                </span>
              </Link>
              <div className='news__data'>
                {format(item.data.toDate(), "yyyy-mm-dd")}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
