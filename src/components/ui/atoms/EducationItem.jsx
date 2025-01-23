// import sc from "./EducationItem.module.css"

// export const EducationItem = ({ years, title, description }) => (
//   <div className={sc.education_item}>
//     <p className={`${sc.education_year} body_text`}>{years}</p>
//     <div className={sc.education_text}>
//       <p className={sc.education_title}>{title}</p>
//       <p className={`${sc.education_desc} body_text`}>{description}</p>
//     </div>
//   </div>
// );







import { useState, useLayoutEffect, useCallback } from "react";
import sc from "./EducationItem.module.css";

export const EducationItem = ({ years, title, description }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 500);
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Добавлен resize слушатель");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Удален resize слушатель");
    };
  }, [handleResize]);

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
