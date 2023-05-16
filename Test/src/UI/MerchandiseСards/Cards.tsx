import React from "react";
import classes from "./Cards.module.scss";
import Star from "../../../public/picture/Product/Star.svg";
interface ICards {
  path: string;
  title: string;
  price: number;
  rate: number;
}

function Cards({ path, title, price, rate }: ICards) {
  return (
    <div className={classes.Card}>
      <img src={path} />
      <div className={classes.Card__info}>
        <div className={classes.title__price}>
          <div className={classes.title}>{title}</div>
          <div className={classes.price}>{price} ₽</div>
        </div>
        <div className={classes.rate__buttons}>
          <div className={classes.rate}>
            <img src={Star} /> <p>{rate}</p>
          </div>
          <button className={classes.Buy}>Купить</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
