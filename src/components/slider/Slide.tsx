import css from "./Slide.module.scss";
import "./sliderCustom.scss";
import { IUsers } from "../../interfaces/IUsers";
import sprite from "../../assets/svg/sprite.svg";

type TUser = {
  user: IUsers;
};

function Slide({ user }: TUser) {
  return (
    <>
      <div className={css.slide}>
        <div className={css.userContainer}>
          <img
            className={css.avatar}
            src={user.avatar}
            alt={user.name}
            width="50px"
          />
          <div className={css.userInfo}>
            <p className={css.name}>{user.name}</p>
            <p className={css.country}>{user.country}</p>
          </div>
          <div className={css.rating}>
            <p className={css.total}>{user.rating}</p>
            <svg width="16" height="17">
              <use xlinkHref={`${sprite}#star`}></use>
            </svg>
          </div>
        </div>
        <div className={css.comment}>{user.comment}</div>
      </div>
    </>
  );
}

export default Slide;
