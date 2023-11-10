import React, { useState } from "react";
import css from "./NavigationFooter.module.scss";
import { dataLinksFooter } from "../../../mocks/linksFooter";
import { ILinksFooter } from "../../../interfaces/ILinksFooter";

function NavigationFooter() {
  const [links, setlinks] = useState<ILinksFooter[]>(dataLinksFooter);
  if (!links || !links.length) {
    return null;
  }
  return (
    <section className={css.navigation}>
      <ul className={css.navigationContainer}>
        {links.map((link, index) => {
          return (
            <li key={index} className={css.navigationItem}>
              <p className={css.title}>{link.title}</p>
              <ul>
                {link.links.map((element, index) => {
                  return (
                    <li key={index}>
                      <a href="/lasles" className={css.link}>
                        {element}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default NavigationFooter;
