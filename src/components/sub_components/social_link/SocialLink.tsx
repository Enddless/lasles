import css from "./SocialLink.module.scss";
import { dataSocialLinks } from "../../../mocks/sociallinks";

function SocialLink() {
  const socialLinks = dataSocialLinks;
  if (!socialLinks || !socialLinks.length) {
    return null;
  }
  return (
    <div className={css.socialLink}>
      {socialLinks.map((link, index) => {
        return (
          <div key={index} className={css.paragraph}>
            <svg width="40">
              <use xlinkHref={link.imageUrl}></use>
            </svg>
          </div>
        );
      })}
    </div>
  );
}

export default SocialLink;
