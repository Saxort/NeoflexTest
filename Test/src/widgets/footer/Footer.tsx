import classes from "./footer.module.scss";
import Telegram from "../../../public/picture/forButton/Telegram.svg";
import Vk from "../../../public/picture/forButton/VK.svg";
import Whatsapp from "../../../public/picture/forButton/Whatsapp.svg";
function Footer() {
  const list = ["Избранное", "Корзина", "Контакты"];
  const icons = [Vk, Telegram, Whatsapp];

  return (
    <div className={classes.Container}>
      <div className={classes.inner__container}>
        <div className={classes.title}>Qpick</div>
        <ul className={classes.list}>
          {list.map((a,i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
        <div>
          <div className={classes.conditions}>Условия сервиса</div>
          <div className={classes.language}>
            <img src={"https://i.imgur.com/KBrnBIS.png"} />
            <p>Pyc</p>
            <p>Eng</p>
          </div>
        </div>
        <div className={classes.links}>
          {icons.map((icon,i) => (
            <img src={icon} key={i}></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
