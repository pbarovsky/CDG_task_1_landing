import { useIsMobile } from "../../hooks/useIsMobile";
import sc from "./EducationItem.module.css";

export const EducationItem = ({ years, title, description }) => {
  const isMobile = useIsMobile(500);

  const mobileTitle =
    title === "Frontend development courses" && isMobile
      ? "Junior Frontend developer"
      : title;

  const mobileDescription =
    description === "Stepik" && isMobile
      ? "Facebook"
      : description === "Saint Petersburg State University" && isMobile
      ? "Stanford University"
      : description;

  return (
    <div className={sc.education_item}>
      <p className={`${sc.education_year} body_text`}>{years}</p>
      <div className={sc.education_text}>
        <p className={sc.education_title}>{mobileTitle}</p>
        <p className={`${sc.education_desc} body_text`}>{mobileDescription}</p>
      </div>
    </div>
  );
};
