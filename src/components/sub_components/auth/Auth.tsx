import css from "./Auth.module.scss";
import { useState } from "react";
import { ITitleButton } from "../../../interfaces/ITitleButton";
import { dataTitleButton } from "../../../mocks/titleButton";
import Logged from "../logged/Logged";
import Button from "../button/Button";



function Auth() {
  const [isLogged, setIsLogged] = useState(false);

  //********** ПОИСК НАЗВАНИЯ ДЛЯ КНОПКИ**********
  const buttonTitles: ITitleButton = dataTitleButton.filter(
    (item) => item.id === "header"
  )[0];

  if (!buttonTitles) {
    return null;
  }

  return (
    <>
      {isLogged ? (
        <Logged />
      ) : (
        <>
          <div className={css.buttons}>
            {Object.values(buttonTitles.titleButton).map((title, index) => {
              return <Button key={index} title={title} index={index} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Auth;
