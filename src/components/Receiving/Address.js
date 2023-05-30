import React from "react";

const Address = () => {
  return (
    <>
      <div>
        <div className="field">
          <div className="fields">
            <div className="twelve wide field">
              <label>Улица, дом/корпус</label>
              <input
                type="text"
                name="shipping[address]"
                placeholder="Название улицы"
              />
            </div>
            <div className="four wide field">
              <label>Квартира</label>
              <input
                type="number"
                name="shipping[address-2]"
                placeholder="Номер квартиры"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
