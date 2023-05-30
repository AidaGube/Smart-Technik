import React, { useContext, useState } from "react";
import { Button } from "../Buttons/Button";
import { useUser } from "../../hooks/useUser";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { appContext } from "../../context/appContext";

export const ReviewForm = ({ handleShowForm }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubitle] = useState("");

  const user = useUser();
  const { detailProduct, getReviewsFromFirebase } = useContext(appContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addedReview = {
      createdAt: serverTimestamp(),
      subtitle,
      title,
      userAvatar: user.photoURL,
      userID: user.uid,
      userName: user.displayName,
      deviceId: detailProduct.id,
    };

    await addDoc(collection(db, "reviews"), addedReview);
    getReviewsFromFirebase();
    setSubitle("");
    setTitle("");
  };

  return (
    <form className='feedback__form '>
      <label className='feedback__form-label'>Введите текст</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        required
      />
      <label className='feedback__form-label'>Введите комментарий</label>
      <textarea
        value={subtitle}
        onChange={(e) => setSubitle(e.target.value)}
        required></textarea>
      <div className='feedback__form-btns'>
        <div onClick={handleShowForm}>
          <Button text='Отмена' defaultClassName='feedback__btn light' />
        </div>
        <div onClick={(e) => handleSubmit(e)}>
          <Button text='Отправить' defaultClassName='feedback__btn' />
        </div>
      </div>
    </form>
  );
};
