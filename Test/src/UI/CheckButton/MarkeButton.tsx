import classes from "./MarkerButton.module.scss";
import { Link } from "react-router-dom";
interface ImButton<I> {
  clasNameSC?: I;
  path: I;
  count: number;
  routPath: string;
}

function MarkerButton(props: ImButton<string>) {
  return (
    <>
      <div className={classes.count}>{props.count}</div>
      <Link to={props.routPath}>
        <img
          className={
            props.clasNameSC
              ? `${props.clasNameSC} ${classes.MarkeButton}`
              : `${classes.MarkeButton}`
          }
          src={props.path}
        />
      </Link>
    </>
  );
}

export default MarkerButton;
