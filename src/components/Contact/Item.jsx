import React from 'react'
import arrow from "../../assets/images/arrow.svg";
import "./style.css"

const Item = ({ items }) => {
  const contactOrder = items.map(item => {
    return (
      <div className='contact-img'>
           <div className="contact__condition_item contact__remark">
              <div className='contact__title'>{item.title} <span className='contact__subtitle'>{item.number}</span></div>
           <img className='prev' src={arrow} />
           </div>
        </div>
    )
  })
  
    return (
    <>
    {contactOrder}
    </>
  )}

export default Item