import css from "./Logo.module.scss";
import sprite from "../../../assets/svg/sprite.svg";

function Logo() {
  return (
    <div className={css.logo}>
      <svg className={css.image} width="35" height="37">
        <use xlinkHref={`${sprite}#logo`}></use>
      </svg>
      <p className={css.titleLeft}>
        Lasles
        <span className={css.titleRight}>VPN</span>
      </p>
    </div>
  );
}

export default Logo;
