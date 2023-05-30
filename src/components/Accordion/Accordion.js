import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleActiveItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null)
      return
    }
    setActiveIndex(index)
  }


  const renderedItems = items.map((item, index) => {
    const active = activeIndex === index ? 'active' : ''


    return (
      <>
        <div className="accordion__row">
          <div onClick={() => { handleActiveItem(index) }} className={`title ${active}`}>
            <div className="accordion__title">
              <span className="accordion__sub-title" >Заказ №{item.id}<span className="accordion__data"> от {item.data}</span></span>
              <span>{item.amount}</span>
              <span className="accordion__expectation">{item.expectation}</span>
              <i className="dropdown icon"></i>
            </div>
          </div>
          <div className={`content ${active}`}>
            <p>{item.content}</p>
          </div>
        </div>
      </>
    )
  })

  return (
    <>
      <h2>История покупок</h2>
      <div className="ui styled accordion">{renderedItems}</div>
    </>
  )


}

export default Accordion