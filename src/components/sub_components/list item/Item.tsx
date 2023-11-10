import css from "./Item.module.scss";
import sprite from "../../../assets/svg/sprite.svg";
import classNames from "classnames";

type TListProps = {
  list: string[];
  nonecircle?: string;
};

function Item({ list, nonecircle }: TListProps) {
  const check = nonecircle === "nonecircle";
  const classNamesList = classNames(css.listItem, {
    [css.marginbottom]: check,
  });
  const classNamesCircle = classNames(css.circle, {
    [css.nonecircle]: check,
  });

  const xlinkHref = check
    ? `${sprite}#checkbox-nonecircle`
    : `${sprite}#checkbox-circle`;
  if (!list || !list.length) {
    return null;
  }
  return (
    <ul className={css.list}>
      {list.map((item, index) => {
        return (
          <li className={classNamesList} key={index}>
            <p className={classNamesCircle}>
              <svg width="24" height="24">
                <use xlinkHref={xlinkHref}></use>
              </svg>
            </p>
            <p>{item}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Item;
