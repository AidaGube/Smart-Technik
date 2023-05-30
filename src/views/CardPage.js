import React, { useContext, useEffect } from "react";
import Card from "../components/Card/Card";
import CardSideBar from "../components/CardSideBar/CardSideBar";
import { appContext } from "../context/appContext";
import { useUser } from "../hooks/useUser";

const CardPage = () => {
  const [showOrder, setShowOrder] = React.useState(false);

  const { cartItems, getCartItems, getProductsFromFirebase, getCart } =
    useContext(appContext);
  const user = useUser();

  const closeBlock = () => {
    setShowOrder(!showOrder);
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className='container'>
      <div className='cardpage'>
        <h1>Оформление заказа</h1>
      </div>
      <div className='CardPage'>
        <Card />
        <CardSideBar />
      </div>
    </div>
  );
};

export default CardPage;
