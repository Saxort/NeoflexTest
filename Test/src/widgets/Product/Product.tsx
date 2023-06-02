import classes from "./Product.module.scss";
import Card from '../../UI/ProductCard/Cards';
import { useContext } from "react";
import { ProductContext } from "../../data/context";

function Product() {
  const { headPhones, wireless, addSelectedData,deleteSelectedData,selectedData} = useContext(ProductContext);

  return (
    <div className={classes.Conteiner}>
      <div className={classes.Caption}>Наушники</div>
      <div className={classes.Cards}>
        {headPhones.map(({ id, img, title, price, rate }) => (
          <Card
            path={img}
            title={title}
            price={price}
            rate={rate}
            key={id}
            id = {id}
            addSelectedData={addSelectedData}
            deleteSelectedData = {deleteSelectedData}
            selectedData = {selectedData}
          ></Card>
        ))}
      </div>
      <div className={`${classes.Caption} ${classes.Caption__Container}`}>
        Беспроводные наушники
      </div>
      <div className={classes.Cards}>
        {wireless.map(({ id, img, title, price, rate }) => (
          <Card
            path={img}
            title={title}
            price={price}
            rate={rate}
            key={id}
            id = {id}
            addSelectedData={addSelectedData}
            deleteSelectedData = {deleteSelectedData}
            selectedData = {selectedData}
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default Product;
