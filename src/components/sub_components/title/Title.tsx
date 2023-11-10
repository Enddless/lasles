import css from "./Title.module.scss";
import classNames from "classnames";

type TTitleProps = {
  title: string;
  subtitle: string;
  classes?: {
    id: string;
    classForTitle?: string;
    classForSubtitle?: string;
  };
};

function Title({ title, subtitle, classes }: TTitleProps) {
  //здесь в зависимости от переданного флага (наименования секции) определяются стили для title и subtitle для таких блоков
  const classNamesTitle = classNames(
    css.title,
    [classes].map((item) => css[`${item?.classForTitle}`]),
    { [css.align]: classes }
  );

  const classNamesSubTitle = classNames(
    css.subtitle,
    [classes].map((item) => css[`${item?.classForSubtitle}`]),
    { [css.align]: classes }
  );

  return (
    <>
      <h1 className={classNamesTitle}>{title}</h1>
      <p className={classNamesSubTitle}>{subtitle}</p>
    </>
  );
}

export default Title;
