import css from "./Card.module.scss";
import box from "../../assets/svg/box.svg";
import Item from "../sub_components/list item/Item";
import Button from "../sub_components/button/Button";
import { dataTitleButton } from "../../mocks/titleButton";

type TCardProps = {
  card: {
    id: string;
    checkboxTitle: string[];
    price: string;
  };
};

function Card({ card }: TCardProps) {
  const buttonTitle = dataTitleButton.filter((item) => item.id === "plan")[0]
    .titleButton;
  return (
    <li className={css.card}>
      <img src={box} alt="box" width="144px" />
      <h3 className={css.title}>{card.id}</h3>

      <Item list={card.checkboxTitle} nonecircle="nonecircle" />

      <div className={css.option}>
        <p className={css.price}>{card.price}</p>
        <Button title={buttonTitle} flag={"Select"} />
      </div>
    </li>
  );
}

export default Card;
