import classes from "./Cards.module.scss";
import Star from "../../../public/picture/Product/Star.svg";
import { useState,useEffect } from "react";
interface ICards {
  path: string;
  title: string;
  price: number;
  rate: number;
  id: number;
  addSelectedData: (productId: number) => void;
  deleteSelectedData: (productId: number) => void;
  selectedData:number[]
}

function Card({
  path,
  title,
  price,
  rate,
  id,
  addSelectedData,
  deleteSelectedData,
  selectedData
}: ICards) {
  let [flag, setFlag] = useState(selectedData.includes(id)?true:false);

  useEffect(() => {
    localStorage.setItem("mainData", JSON.stringify(selectedData));
  }, [selectedData]);

  
  const Buy = () => {
    addSelectedData(id);
    setFlag(!flag);
  };

  const Del = () => {
    deleteSelectedData(id);
    setFlag(!flag);
  };

  return (
    <div className={classes.Card}>
      <img className={classes.main___Img} src={path} />
      <div className={classes.Card__info}>
        <div className={classes.title__price}>
          <div className={classes.title}>{title}</div>
          <div className={classes.price}>{price} ₽</div>
        </div>
        <div className={classes.rate__buttons}>
          <div className={classes.rate}>
            <img src={Star} /> <p>{rate}</p>
          </div>
          <button className={classes.Buy} onClick={flag ? Del : Buy}>
            {flag ? <p>В корзине</p> : <p>Купить</p>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
