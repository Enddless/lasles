import css from "./Main.module.scss";
import InfoBlock from "../block-about/InfoBlock";
import Count from "../count/Count";
import Plans from "../block-plans/Plans";
import Locations from "../block-locations/Locations";
import Sponsors from "../block-sponsors/Sponsors";
import Comments from "../block-comments/Comments";
import Subscribe from "../block-subscribe/Subscribe";
import Button from "../sub_components/button/Button";
import { dataTitleButton } from "../../mocks/titleButton";
import Item from "../sub_components/list item/Item";
import { useCheckboxes } from "../../request/getCheckboxes";
import {classesForMain,classesForExcellence, classesForSubscribe} from "../../mocks/classesForMainBlock"

function Main() {
  //выгружаю чекбоксы для компонента InfoBlock
  const result = useCheckboxes();
  if (!result) {
    return null;
  }
  const { title } = result;

  const buttonTitle = dataTitleButton.filter(
    (item) => item.id === "leadBlock"
  )[0].titleButton;

  return (
    <main className={css.main}>
      <section className={css.wrapper}>
        <InfoBlock classes={classesForMain}>
          <Button title={buttonTitle} red="red" />
        </InfoBlock>
        <Count />

        <InfoBlock classes={classesForExcellence}>
          <div className={css.list}>
            <Item list={title} />
          </div>
        </InfoBlock>
      </section>

      <section className={css.container}>
        <Plans />
        <Locations />
        <Sponsors />
        <Comments />
        <Subscribe classes={classesForSubscribe} />
      </section>
    </main>
  );
}

export default Main;
