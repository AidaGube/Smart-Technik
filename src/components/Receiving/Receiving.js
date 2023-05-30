import React from "react";
import Location from "./Lacation";
import NextBtn from "../Card/Next-btn";
import Date from "./Date";
import Address from "./Address";

import "./receiving.css";
import Comment from "./Comment";
import EditBtn from "../Card/EditBtn";

const Receiving = () => {
  const [showReceiving, setShowReceiving] = React.useState(false);

  const closeBlock = () => {
    setShowReceiving(!showReceiving);
  };

  return (
    <form className="ui form receiving-from">
      <h2>Способ получения</h2>
      {showReceiving ? (
        <>
          <Location />
          <Date />
          <Address />
          <Comment />
          <NextBtn />
        </>
      ) : (
        <div onClick={closeBlock}>
          <EditBtn />
        </div>
      )}
    </form>
  );
};

export default Receiving;
