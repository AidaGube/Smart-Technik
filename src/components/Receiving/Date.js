import React from "react";

const Date = () => {
  return (
    <div>
      <div className="receiving">
        <div className="four wide field">
          <label>Дата</label>
          <input type="date" />
        </div>
        <div className="four wide field">
          <label>Время</label>
          <input type="time" />
        </div>
      </div>
    </div>
  );
};

export default Date;
