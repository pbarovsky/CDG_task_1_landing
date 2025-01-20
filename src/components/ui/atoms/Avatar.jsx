import sc from "./Avatar.module.css";
import AVATAR from "../../../assets/images/avatar.png";

export const Avatar = () => (
  <img src={AVATAR} alt="avatar" className={sc.avatar} />
);
