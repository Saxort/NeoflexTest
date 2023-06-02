import Product from "../../widgets/Product/Product";
import NavBar from "../../widgets/navbar/navbar";
import classes from "./sales.module.scss";
import Footer from '../../widgets/footer/Footer';



function Sale() {
  return (
    <div className={classes.Sale}>
      <NavBar></NavBar>
      <Product></Product>
      <Footer></Footer>
    </div>
  
  );

}

export default Sale;
