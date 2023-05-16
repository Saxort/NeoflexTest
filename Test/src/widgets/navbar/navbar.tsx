import MarkerButton from "../../UI/CheckButton/MarkeButton";
import classes from "./navbar.module.scss";
import Like from '../../../public/picture/forButton/Like.svg'
import Bucket from '../../../public/picture/forButton/bucket.svg'

function NavBar() {
  return (
    <nav className={classes.nav}>
      <div className={classes.title}>QPICK</div>
      <div className={classes.Buttons}>
        <MarkerButton path ={Like}></MarkerButton>   
        <MarkerButton path ={Bucket}></MarkerButton>       
      </div>    
    </nav>
  );
}

export default NavBar;
