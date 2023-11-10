import React, { useState } from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slide from "../slider/Slide";
import Title from "../sub_components/title/Title";
import css from "./Comments.module.scss";
import { IUsers } from "../../interfaces/IUsers";
import { data } from "../../mocks/users";
import { useDescription } from "../../request/getDescription";
import { settingsSlider } from "../slider/setting";

function Comments() {
  //подгружаю данные по комментам и тайтлам из моков
  const [usersData, setusersData] = useState<IUsers[]>(data);

  //поиск title и subtitle по соответствующему id
  const result = useDescription({ id: "Comment" });
  if (!result) {
    return null;
  }
  const { title, subtitle } = result;

  //проверка на пустые данные по юзеру
  if (!usersData || !usersData.length) {
    return null;
  }
  return (
    <section className={css.comments}>
      <div className={css.wrapper}>
        <div className={css.row}>
          <Title title={title} subtitle={subtitle} />
        </div>
      </div>

      <div className={css.list}>
        <SlickSlider {...settingsSlider} className={css.slider}>
          {usersData.map((user, index) => (
            <Slide key={index} user={user} />
          ))}
        </SlickSlider>
      </div>
    </section>
  );
}

export default Comments;
