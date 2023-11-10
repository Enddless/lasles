import css from "./Subscribe.module.scss";
import Title from "../sub_components/title/Title";
import Button from "../sub_components/button/Button";
import { useDescription } from "../../request/getDescription";
import { dataTitleButton } from "../../mocks/titleButton";

type TTextProps = {
  flag?: string;
  classes?: {
    id: string;
    classForTitle?: string;
    classForSubtitle?: string;
  };
};

function Subscribe({ classes }: TTextProps) {
  //поиск title и subtitle по соответствующему id
  const result = useDescription({ id: "Subscribe" });
  if (!result) {
    return null;
  }
  const { title, subtitle } = result;

  const buttonTitle = dataTitleButton.filter(
    (item) => item.id === "subscribe"
  )[0].titleButton;

  return (
    <section className={css.wrapper}>
      <div className={css.subscribe}>
        <div className={css.blockLeft}>
          <Title title={title} subtitle={subtitle} classes={classes} />
        </div>
        <div className={css.blockRight}>
          <Button title={buttonTitle} red="red" />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
