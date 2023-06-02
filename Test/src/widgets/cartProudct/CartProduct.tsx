import React, { useState, useEffect } from "react";
import classes from "./CartProduct.module.scss";
import CCard from "../../UI/CartCard/CCard";
import { ProductContext } from "../../data/context";
import { useContext } from "react";

const CartProduct = () => {
  const { headPhones, wireless, selectedData } = useContext(ProductContext);
  const allProducts = [...headPhones, ...wireless];
  const [countProducts, setCProducts] = useState<number>(0);

  const incr = (price: number) => {
    console.log(price);
    setCProducts((prev) => prev + price);
  };

  const decr = (price: number) => {
    setCProducts((prev) => (prev <= 0 ? 0 : prev - price));
  };

  const filterProducts = allProducts.filter((el) =>
    selectedData.includes(el.id)
  );
  return (
    <div className={classes.Container}>
      <div className={classes.Caption}>Корзина</div>
      <div className={classes.Product___Container}>
        <div>
          <div className={classes.Card}>
            {filterProducts.map((el) => (
              <CCard
                path={el.img}
                title={el.title}
                price={el.price}
                id={el.id}
                incr={incr}
                decr={decr}
                key={el.id}
              />
            ))}
          </div>
          <div className={classes.form}></div>
        </div>
        <div className={classes.buyForm}>
          <div className={classes.sum}>
            <p>ИТОГО</p>
            <p>₽ {countProducts}</p>
          </div>
          <button className={classes.Buy___Button}>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
