import { useContext } from "react";
import css from "./Button.module.scss";
import classNames from "classnames";
import { ModalContext } from "../../../context/modalcontext";

type TButtonProps = {
  title: string | string[];
  index?: number;
  red?: string;
  flag?: string;
  onClick?: (e: React.FormEvent) => void;
};

function Button({ title, index, red, flag }: TButtonProps) {
  const redBtn = red === "red";
  const select = flag === "Select";

  const classNamesButton = classNames(css.btn, `${css["btn--" + index]}`, {
    [`${css["btn--red"]}`]: redBtn,
    [`${css["btn--select"]}`]: select,
  });

  const { toogleFormSignin } = useContext(ModalContext);
  const handler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <button
      className={classNamesButton}
      onClick={
        index === 0 || index === 1
          ? () => toogleFormSignin()
          : (event) => {
              handler(event);
            }
      }
    >
      {title}
    </button>
  );
}

export default Button;
