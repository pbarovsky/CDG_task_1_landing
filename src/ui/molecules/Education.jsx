import { EducationItem } from "../atoms/EducationItem";
import sc from "./Education.module.css";

export const Education = () => {
  return (
    <div className={sc.education}>
      <h3 className={sc.education_title}>Education & Experience</h3>
      <div className={sc.education_items}>
        <EducationItem
          years="2008 - Present"
          title="Middle Frontend developer"
          description="Ozon"
        />
        <EducationItem
          years="2006 - 2007"
          title="Frontend development courses"
          description="Stepik"
        />
        <EducationItem
          years="2000 - 2005"
          title="Frontend developer"
          description="Saint Petersburg State University"
        />
      </div>
    </div>
  );
};
