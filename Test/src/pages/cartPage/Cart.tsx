import React from "react";
import classes from "./cart.module.scss";
import NavBar from "../../widgets/navbar/navbar";
import Footer from "../../widgets/footer/Footer";
import CartProduct from "../../widgets/cartProudct/CartProduct";

const cart = () => {
  return (
    <div className={classes.cart}>
      <NavBar></NavBar>
      <CartProduct></CartProduct>
      <Footer></Footer>
    </div>
  );
};

export default cart;
