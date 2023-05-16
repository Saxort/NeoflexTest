import classes from "./MarkerButton.module.scss";

interface ImButton<I> {
  clasNameSC?: I;
  path:I;
}

function MarkerButton(props: ImButton<string>) {
  return (
    <img
      className={
        props.clasNameSC
          ? `${props.clasNameSC} ${classes.MarkeButton}`
          : `${classes.MarkeButton}`
      }
      src={props.path}
    />
  );
}

export default MarkerButton;
