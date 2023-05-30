import React from 'react'
import "./style.css"
import { Button } from "../Buttons/Button";

const ContactsForm = () => {
    return (
  <div className="contacts">
     <div className="contacts__wrap">
      <h2 className='title__name'>Связаться с нами</h2>
       <div className="contact-items">
         <div className='contact__item1'>
          <div className="contact-form">
             <h3>Имя</h3>
           <input type="text" placeholder="Введите имя" className="contact__input"/> 
           <h3>Номер</h3>
           <input type="number" placeholder="Введите номер телефона" className="contact__input"/>
          </div>
          <Button defaultClassName='contact__btn' text='Отправить'  />
        </div>
        <div className='contact__item2'>
      <div className="contact__accept">
      <h3>Сообщение</h3>
    <input type="text" placeholder="Введите сообщение" className="contact__inputs"/>
    <div className="checkbox">
        <input className="checkbox__input" type="checkbox" id="checkbox_1"/>
        <label className="checkbox__label" htmlFor="checkbox_1"> Отправляя данную форму вы соглашаетесь с политикой конфиденциальности</label>
    </div>
    </div>
  </div> 
  </div> 
  <Button defaultClassName='contact-btn' text='Отправить'  />
 </div>
</div>
)}

export default ContactsForm