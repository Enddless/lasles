import css from "./Header.module.scss";
import Logo from "../sub_components/logo/Logo";
import NavigationHeader from "../sub_components/navigation-header/NavigationHeader";
import Burger from "../sub_components/burger/Burger";
import Form from "../form/Form";
import { useContext } from "react";
import { ModalContext } from "../../context/modalcontext";
import Auth from "../sub_components/auth/Auth";

function Header() {
  const { modalFormSignin } = useContext(ModalContext);

  return (
    <header className={css.container + " " + css.wrapper}>
      <Logo />
      <NavigationHeader />
      <Auth />

      <Burger />
      {modalFormSignin && <Form />}
    </header>
  );
}

export default Header;
