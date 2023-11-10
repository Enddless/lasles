import React, { useContext } from "react";
import { ModalContext } from "../../context/modalcontext";
import Button from "../sub_components/button/Button";
import css from "./Form.module.scss";

function Form() {
  const { closeFormSignin } = useContext(ModalContext);

  return (
    <section className={css.container}>
      <form className={css.form}>
        <input
          type="email"
          className={css.email}
          placeholder="Enter your email"
        />
        <input
          type="password"
          className={css.password}
          placeholder="Enter your password"
        />

        <div className={css.enter}>
          <Button title={"Go!"}/>
        </div>
      </form>
      <button onClick={() => closeFormSignin()} className={css.close}></button>
    </section>
  );
}

export default Form;
