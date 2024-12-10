import sc from "./AboutInfo.module.css";

const AboutInfo = ({ boldText = "", paragraphText = "", classSize = "", classFont = "" }) => {
  return (
    <div className={`${sc["about-info"]} ${classSize}`}>
      <div className={sc["about-info__line_top"]}></div>
      <p className={`${sc["about-info__info__desc"]} ${classFont}`}>
        <b className={sc["about-info__info__name"]}>{boldText}</b>{" "}
        {paragraphText}
      </p>
    </div>
  );
};

export default AboutInfo;
