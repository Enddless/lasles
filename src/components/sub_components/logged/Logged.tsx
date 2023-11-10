import css from "./Logged.module.scss";
import classNames from "classnames";
import { useState } from "react";





function Logged() {
  return (
      <p className={css.user}>Hello, user!</p>
  );
}

export default Logged;
