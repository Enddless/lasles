import css from "./DropDown.module.scss";
import { useContext } from "react";
import { ILinksHeader } from "../../../interfaces/ILinksHeader";
import { dataLinksHeader } from "../../../mocks/linksHeader";
import { ModalContext } from "../../../context/modalcontext";

function DropDown() {
  const { toogleFormSignin, closeBurger } = useContext(ModalContext);

  const links: ILinksHeader = dataLinksHeader;
  if (!links || !links.links) {
    return null;
  }
  return (
    <div className={css.dropdown}>
      <ul className={css.container}>
        {links.links.map((link, index) => {
          return (
            <li key={index} className={css.li}>
              <a href="/" className={css.link}>
                {link}
              </a>
            </li>
          );
        })}

        <li onClick={() => toogleFormSignin()}> Sign in </li>
        <li>Sign up</li>
      </ul>

      <button onClick={() => closeBurger()} className={css.close}></button>
    </div>
  );
}

export default DropDown;
