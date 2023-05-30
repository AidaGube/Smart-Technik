import { serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import backtackIcon from "../../assets/images/backtack.svg";
import { appContext } from "../../context/appContext";
import { Button } from "../Buttons/Button";

export const NewsCreateForm = () => {
  const { createNews } = useContext(appContext);

  const [showAddedPhoto, setShowAddedPhoto] = useState(false);
  const [productImage, setProductImage] = useState("");
  const [title, setTitle] = useState("");
  const [firstText, setFirstDescription] = useState("");
  const [secondText, setSecondDescription] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const files = e.target.files;
    createImage(files[0]);
  };
  const createImage = (file) => {
    let image = new Image();
    let reader = new FileReader();
    reader.onload = (e) => {
      setProductImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const showPhoto = () => {
    setShowAddedPhoto(!showAddedPhoto);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addednews = {
      title,
      firstText,
      secondText,
      image: productImage,
      data: serverTimestamp(),
    };
    createNews(addednews);
    setFirstDescription("");
    setSecondDescription("");
    setTitle("");
    navigate("/news");
  };

  return (
    <form className='create__form'>
      <div className='create__input'>
        <label className='input__label'>Заголовок новости</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          className='input'
          required
        />
      </div>
      <div className='create__input'>
        <label className='input__label'>Описание №1</label>
        <textarea
          onChange={(e) => setFirstDescription(e.target.value)}
          type='text'
          className='input textaarea'
          required
        />
      </div>
      <div className='create__input'>
        <label className='input__label'>Описание №2 (не обязательно)</label>
        <textarea
          onChange={(e) => setSecondDescription(e.target.value)}
          type='text'
          className='input textaarea'
          required
        />
      </div>
      <div className='create__input file'>
        <img
          src={productImage}
          className={`added__iamge ${
            showAddedPhoto && productImage ? "active" : ""
          }`}
        />
        <label className='input__label'>Фотография</label>
        <label
          onMouseOver={showPhoto}
          onMouseLeave={showPhoto}
          className='input file'>
          <h4>Закрепить</h4>
          <img src={backtackIcon} />
          <input onChange={handleChange} type='file' className='input' />
        </label>
      </div>
      <div onClick={handleSubmit}>
        <Button text='Создать' defaultClassName='create__btn' />
      </div>
    </form>
  );
};
