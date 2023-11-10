import React, { useState } from "react";
import Card from "../cards/Card";
import css from "./CardsList.module.scss";
import { IAllPlans } from "../../interfaces/IAllPlans";
import { dataPlans } from "../../mocks/plans";

function CardList() {
  const [cardsInfo, setcardsInfo] = useState<IAllPlans[]>(dataPlans);
  if (!cardsInfo || !cardsInfo.length) {
    return null;
  }
  return (
    <ul className={css.tarifList}>
      {cardsInfo.map((card, index) => {
        return <Card key={index} card={card} />;
      })}
    </ul>
  );
}

export default CardList;
