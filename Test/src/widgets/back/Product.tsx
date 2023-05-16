import React from "react";
import classes from "./Product.module.scss";
import Cards from "../../UI/MerchandiseСards/Cards";
function Product() {
  const headPhones = [
    {
      id : 1,
      img: "../../../public/picture/Product/Irpods.svg",
      title: "1",
      price: 2927,
      rate: 4.7,
    },
    {
      id: 2,
      img: "../../../public/picture/Product/Irpods.svg",
      title: "2",
      price: 2927,
      rate: 4.7,
    },
    {
      id: 2,
      img: "../../../public/picture/Product/Irpods.svg",
      title: "2",
      price: 2927,
      rate: 4.7,
    },{
      id: 2,
      img: "../../../public/picture/Product/Irpods.svg",
      title: "2",
      price: 2927,
      rate: 4.7,
    },{
      id: 2,
      img: "../../../public/picture/Product/Irpods.svg",
      title: "2",
      price: 2927,
      rate: 4.7,
    },
  ];
  return (
    <div className={classes.Conteiner}>
      <div className={classes.Caption}>Наушники</div>
      <div className={classes.Cards}>
        {headPhones.map(({ id ,img, title, price, rate }) => (
          <Cards path={img} title={title} price={price} rate={rate} key={id}></Cards>
        ))}
      </div>
    </div>
  );
}

export default Product;
