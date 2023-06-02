import MarkerButton from "../../UI/CheckButton/MarkeButton";
import classes from "./navbar.module.scss";
import Like from "../../../public/picture/forButton/Like.svg";
import Bucket from "../../../public/picture/forButton/bucket.svg";
import { useContext } from "react";
import { ProductContext } from "../../data/context";
import { Link } from "react-router-dom";
function NavBar() {
  const { selectedData } = useContext(ProductContext);
  const count = selectedData.length;

  return (
    <nav className={classes.nav}>
      <Link to="/" style={{textDecoration:'none'}}>
        <div className={classes.title}>QPICK</div>
      </Link>
      <div className={classes.Buttons}>
        <MarkerButton
          routPath="/favorites"
          count={4}
          path={Like}
        ></MarkerButton>
        <MarkerButton
          routPath="/cart"
          count={count}
          path={Bucket}
        ></MarkerButton>
      </div>
    </nav>
  );
}

export default NavBar;
