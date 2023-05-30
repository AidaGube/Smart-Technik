import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import { Button } from "../Buttons/Button";
import { ReviewItem } from "./ReviewItem";

import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";

import "./style.css";
import { FeedBack } from "./FeedBack";

export const ProductReview = () => {
  const { getReviewsFromFirebase, reviews, detailProduct } =
    useContext(appContext);

  useEffect(() => {
    getReviewsFromFirebase();
  }, []);

  const productReviews = reviews.filter((review) => {
    return review.deviceId === detailProduct.id;
  });
  // console.log(productReviews);

  const renderedReviews = productReviews.length ? (
    productReviews.map((review) => (
      <React.Fragment key={review.title + Math.random()}>
        <ReviewItem review={review} />
      </React.Fragment>
    ))
  ) : (
    <>
      <div>
        <h2>Oops! У этого товара нет отзывов</h2>
        <p>Вы можете написать свое мнение о товаре</p>
      </div>
    </>
  );

  return (
    <div className='detail__review'>
      <div className='container'>
        <div className='description__title'>
          Отзывы на {detailProduct ? detailProduct.title : ""}
        </div>
        <div className='review__content'>
          <div className='review__items'>{renderedReviews}</div>
          <FeedBack />
        </div>
      </div>
    </div>
  );
};
