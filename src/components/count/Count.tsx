import React, { useState } from "react";
import css from "./Count.module.scss";
import { dataCounts } from "../../mocks/counts";
import { ICounts } from "../../interfaces/ICounts";

function Count() {
  const [count, setcount] = useState<ICounts[]>(dataCounts);
  if (!count || !count.length) {
    return null;
  }
  return (
    <section className={css.countsContainer}>
      <ul className={css.counts}>
        {count.map((item, index) => {
          return (
            <li className={css.count} key={index}>
              <div className={css.pick}>
                <svg className={css.image} width="24px" height="24px">
                  <use xlinkHref={item.imageUrl}></use>
                </svg>
              </div>
              <div className={css.text}>
                <p className={css.title}>{item.title}</p>
                <p className={css.subtitle}>{item.subtitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Count;
