import css from "./NavigationHeader.module.scss";
import { ILinksHeader } from "../../../interfaces/ILinksHeader";
import { dataLinksHeader } from "../../../mocks/linksHeader";

function NavigationHeader() {
  const links: ILinksHeader = dataLinksHeader;
  if (!links || !links.links) {
    return null;
  }
  return (
    <nav className={css.navigation}>
      <ul className={css.navigationContainer}>
        {links.links.map((link, index) => {
          return (
            <li key={index} className={css.navigationItem}>
              <a href="/lasles" className={css.link}>
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavigationHeader;
