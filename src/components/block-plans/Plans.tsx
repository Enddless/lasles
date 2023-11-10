import css from "./Plans.module.scss";
import CardList from "../cards list/CardsList";
import Title from "../sub_components/title/Title";
import { useDescription } from "../../request/getDescription";

function Plans() {
  //поиск title и subtitle по соответствующему id
  const result = useDescription({ id: "Plan" });
  if (!result) {
    return null;
  }
  const { title, subtitle } = result;

  return (
    <section className={css.plans}>
      <div className={css.wrapper}>
        <div className={css.row}>
          <Title title={title} subtitle={subtitle} />
        </div>
        <div className={css.cardsList}>
          <CardList />
        </div>
      </div>
    </section>
  );
}

export default Plans;
