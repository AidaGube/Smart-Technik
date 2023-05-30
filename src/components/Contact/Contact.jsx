import React from 'react'
import "./style.css"
import Item from '../../../../../react/smart-redux git/src/components/Contact/Item'
import mail from "../../assets/images/mail.svg";
import clock from "../../assets/images/clock.svg";


const items = [
    {
        title: "СПб, Ул. Дыбенко д.23 к.1 ",
        number: "+7 (812) 509-23-43"
    },
    {
        title: "СПб, Пр. Энгельса д.113 к.2 ",
        number: "+7 (812) 509-23-43"
    },
    {
        title: "СПб, Ул. Ленсовета д.81",
        number: "+7 (812) 602-74-02"
    },
    {
        title: "СПб, ул. Тарасова д.10 ",
        number: "+7 (967) 555-01-06"
    }
]

const Contact = () => {
    return (
          <div className="contact__conditions">
           <Item items={items} key={items.id}/>
            <hr/>
            <div className="adress">
            <div className="adress__item">
            <img className='contactsImg' src={mail} />
              <div className="adress__item-header">
                <p className='adress__mail'>smart-tekhnika@gmail.com</p>
              </div>
            </div>
            <div className="adress__item">
            <img className='contactImg' src={clock} />
              <div className="adress__itemHeader">
                <span className='adress__subtitle'>Режим работы</span>
                <p className='adress__title'>Пн-вс с 10:00 до 21:00</p>
              </div>
            </div>
        </div>
      </div>
)}

export default Contact