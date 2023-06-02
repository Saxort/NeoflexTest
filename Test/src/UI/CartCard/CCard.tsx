import React, { useContext, useState, useEffect } from "react";
import classes from "./CCard.module.scss";
import { ProductContext } from "../../data/context";
interface ICards {
  path: string;
  title: string;
  price: number;
  id: number;
  incr: (price: number) => void;
  decr: (price: number) => void;
}
const CCard = ({ path, title, price, id, incr, decr }: ICards) => {
  const [count, setCount] = useState(1);
  const [priceCount, setPCount] = useState(price);
  const { deleteSelectedData } = useContext(ProductContext);
  const handleIncrement = () => {
    setCount(count + 1);
    setPCount(priceCount + price);
    incr(price);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
      setPCount(priceCount - price);
      decr(price);
    } else {
      decr(price);
      deleteSelectedData(id);
    }
  };

  const handleDelete = () => {
    deleteSelectedData(id);
    decr(price * count);
    setCount(1);
    setPCount(price);
  };

  useEffect(() => {
    incr(price / 2);
  }, []);

  
  return (
    <div className={classes.Card}>
      <div className={classes.img__counteButtons}>
        <img className={classes.main___Img} src={path} />
        <div className={classes.counterButtons}>
          <button className={classes.Buy} onClick={handleDecrement}>
            <p>-</p>
          </button>
          <div>{count}</div>
          <button
            className={classes.Buy}
            onClick={handleIncrement}
          >
            <p>+</p>
          </button>
        </div>
      </div>

      <div className={classes.title__price}>
        <div className={classes.title}>{title}</div>
        <div className={classes.price}>{price} ₽</div>
      </div>

      <div className={classes.del__price}>
        <button className={classes.deletButtion} onClick={handleDelete} />
        <div className={classes.price}>{priceCount}₽</div>
      </div>
    </div>
  );
};

export default CCard;
