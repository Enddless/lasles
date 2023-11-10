import Logo from "../sub_components/logo/Logo";
import css from "./Footer.module.scss";
import SocialLink from "../sub_components/social_link/SocialLink";
import NavigationFooter from "../sub_components/navigation-footer/NavigationFooter";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.wrapper}>
        <div className={css.info}>
          <Logo />
          <p className={css.title}>
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </p>

          <SocialLink />

          <a href="/" className={css.copyright}>
            ©2020LaslesVPN
          </a>
        </div>

        <NavigationFooter />
      </div>
    </footer>
  );
}

export default Footer;
