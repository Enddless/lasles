import css from "./Burger.module.scss";
import classNames from "classnames";
import { useContext } from "react";
import DropDown from "../drop-down/DropDown";
import { ModalContext } from "../../../context/modalcontext";

function Burger() {
  const { modalBurger, toogleBurger } = useContext(ModalContext);

  return (
    <>
      <div className={css.burger} onClick={() => toogleBurger()}></div>
      {modalBurger && <DropDown />}
    </>
  );
}

export default Burger;
