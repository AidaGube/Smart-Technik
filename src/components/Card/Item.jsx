import React, { useContext, useState } from "react";
import deleteIcon from "../../assets/images/delete-icon.svg";
import plusIcon from "../../assets/images/plus-icon.svg";
import minusIcon from "../../assets/images/minus-icon.svg";
import { appContext } from "../../context/appContext";

const Item = ({ items }) => {
  const { changeProductCount, addToCart } = useContext(appContext);
  const [number, setNumber] = useState(0);

  const rederedOrder = items.map((product) => {
    return (
      <React.Fragment key={product.item.id}>
        <div className='item-content'>
          <img className='imageUrl' src={product.item.imageURL} alt='' />
          <p className='order-description'>{product.item.title}</p>
          <div className='order__count'>
            <img src={plusIcon} />
            <label>
              <span className='count'> {product.count} </span>
              <input
                type='number'
                value={product.count}
                onChange={(e) =>
                  changeProductCount(e.target.value, product.item.id)
                }
              />
            </label>
            <img src={minusIcon} />
          </div>
          <span className='total__count'>{product.subPrice} ₽</span>
          <div className='delete'>
            <img onClick={() => addToCart(product.item)} src={deleteIcon} />
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <>{rederedOrder}</>;
};

export default Item;
