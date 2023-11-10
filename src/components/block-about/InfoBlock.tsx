import React from "react";
import css from "./InfoBlock.module.scss";
import Title from "../sub_components/title/Title";

import classNames from "classnames";
import { useDescription } from "../../request/getDescription";

type TTextProps = {
  classes?: {
    id: string;
    classForTitle?: string;
    classForSubtitle?: string;
    classForContainer?: string;
    classForSection?: string,
  };
  children?: React.ReactNode;
};

function InfoBlock({ classes, children }: TTextProps) {
  const idProps = classes?.id;

  //поиск title и subtitle по соответствующему id
  const result = useDescription({ id: idProps });
  if (!result) {
    return null;
  }
  const { title, subtitle } = result;

  //  установка классов в зависимости от условий для общего контейнера
  const classNamesContainer = classNames(
    css.text,
    [classes].map((item) => css[`${item?.classForContainer}`])
  );
  //  установка классов для section
  const classNamesSection = classNames(
    css.about,
    [classes].map((item) => css[`${item?.classForSection}`])
  );

  return (
    <section className={classNamesSection}>
      <div className={classNamesContainer}>
        <Title title={title} subtitle={subtitle} classes={classes} />
        {children}
      </div>

    </section>
  );
}

export default InfoBlock;
