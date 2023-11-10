import css from "./Sponsors.module.scss";
import netflix from "../../assets/images/netflix.png";
import reddit from "../../assets/images/reddit.png";
import amazon from "../../assets/images/amazon.png";
import discord from "../../assets/images/discord.png";
import spotify from "../../assets/images/spotify.png";

type TSponsors = string[];

function Sponsors() {
  const sponsors: TSponsors = [netflix, reddit, amazon, discord, spotify];
  if (!sponsors || !sponsors.length) {
    return null;
  }
  return (
    <section className={css.sponsors}>
      <div className={css.wrapper}>
        <div className={css.logo}>
          {sponsors.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} alt="sponsors logo" width="100%" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
