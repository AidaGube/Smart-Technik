import React, { useContext, useState } from "react";
import { modalContext } from "../../context/modalContext";
import { useUser } from "../../hooks/useUser";
import { Button } from "../Buttons/Button";
import { LoginModalWindow } from "../ModalWindows/LoginModalWindow";
import { ReviewForm } from "./ReviewForm";

export const FeedBack = () => {
  const [showForm, setShowForm] = useState(false);

  const { changeSigninState } = useContext(modalContext);

  const user = useUser();

  const handleShowForm = () => {
    if (!user) {
      changeSigninState();
    } else {
      setShowForm(!showForm);
    }
  };

  const item = (
    <div className='feedback '>
      <div className='feedback__title'>Напишите своё мнение о товаре</div>
      <div className='feedback__subtitle'>
        Сделайте выбор других покупалетей легче
      </div>
      <div onClick={handleShowForm}>
        <Button text='Написать отзыв' defaultClassName='feedback__btn' />
      </div>
    </div>
  );

  return (
    <>
      <div className='feed'>
        {!showForm ? (
          <>{item}</>
        ) : (
          <>
            {/* <LoginModalWindow /> */}
            <ReviewForm handleShowForm={handleShowForm} />
          </>
        )}
      </div>
    </>
  );
};
