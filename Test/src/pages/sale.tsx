import Product from "../widgets/back/Product";
import NavBar from "../widgets/navbar/navbar";
import classes from "./sales.module.scss";

function Sale() {
  return (
    <div className={classes.Sale}>
      <NavBar></NavBar>
      <Product></Product>
    </div>
  );
}

export default Sale;
