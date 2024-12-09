import MusicIcon from "../Icons/MusicIcon";
import PaintIcon from "../Icons/PaintIcon";
import PhotoIcon from "../Icons/PhotoIcon";
import sc from "./Interests.module.css";

const InterestItem = ({ icon: Icon, title, description }) => (
  <div className={sc.interests__wrapper}>
    <div className={sc["interests__icon-container"]}>
      <Icon className={sc.interests__icon} />
    </div>
    <div className={sc.interests__text}>
      <p className={sc.interests__text__title}>{title}</p>
      <p className={sc.interests__text__desc}>{description}</p>
    </div>
  </div>
);

const Interests = () => {
  return (
    <div className={sc.interests}>
      <h3 className={sc.interests__title}>Interests</h3>
      <div className={sc["interests__item-container"]}>
        <InterestItem
          icon={MusicIcon}
          title="Music"
          description="Indie rock | Reggae"
        />
        <InterestItem
          icon={PaintIcon}
          title="Art"
          description="Edvard Munch | Frida Kahlo"
        />
        <InterestItem
          icon={PhotoIcon}
          title="Photography"
          description="Portraits"
        />
      </div>
    </div>
  );
};

export default Interests;
