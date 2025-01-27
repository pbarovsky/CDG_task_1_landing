import sc from "./InterestItem.module.css";

export const InterestItem = ({ icon: Icon, title, description }) => (
  <div className={sc.interests_item}>
    <div className={sc.interests_icon_container}>
      <Icon className={sc.interests_icon} />
    </div>
    <div className={sc.interests_text}>
      <p className={sc.interests_text_title}>{title}</p>
      <p className={`${sc.interests_text_desc} body_text`}>{description}</p>
    </div>
  </div>
);
