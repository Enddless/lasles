import css from "./Locations.module.scss";
import map from "../../assets/images/map.png";
import Title from "../sub_components/title/Title";
import { useDescription } from "../../request/getDescription";

function Locations() {
  //поиск title и subtitle по соответствующему id
  const result = useDescription({ id: "Location" });
  if (!result) {
    return null;
  }
  const { title, subtitle } = result;

  return (
    <section className={css.locations}>
      <div className={css.wrapper}>
        <div className={css.row}>
          <Title title={title} subtitle={subtitle} />
        </div>
        <img src={map} alt="map" className={css.map} width="100%" />
      </div>
    </section>
  );
}

export default Locations;
