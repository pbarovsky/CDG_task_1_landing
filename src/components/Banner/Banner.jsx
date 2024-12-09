import AboutInfo from "../About/AboutInfo";
import Button from "../Button";
import PHOTO from "../../assets/images/photo.png";

import sc from "./Banner.module.css";

const BannerParapgraphText =
  "Help you to create high-quality digital products that your clients will love and let your business thrive";

const Banner = () => {
  return (
    <div className={sc.banner}>
      <div className={sc.banner__info__container}>
        <div className={sc.banner__title__text}>
          <h1 className={sc.banner__title}>Hey, I’m Nick</h1>
          <p className={sc.banner__subtitle}>Frontend developer</p>
        </div>
        <AboutInfo
          paragraphText={BannerParapgraphText}
          classSize={sc["banner__text__container-size"]}
          classFont={sc['banner__text-font-size']}
        />
        <Button btn_text="Get in touch" />
      </div>
      <div className={sc.banner__photo__container}>
        <div className={sc.banner__background}></div>
        <img className={sc.banner__photo} src={PHOTO} alt="developer_photo" />
      </div>
    </div>
  );
};

export default Banner;
