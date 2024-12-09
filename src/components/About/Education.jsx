import sc from "./Education.module.css";

const EducationItem = ({ years, title, description }) => (
  <div className={sc.education__wrapper}>
    <p className={sc.education__year}>{years}</p>
    <div className={sc.education__text}>
      <p className={sc.education__text__title}>{title}</p>
      <p className={sc.education__text__desc}>{description}</p>
    </div>
  </div>
);

const Education = () => {
  return (
    <div className={sc.education}>
      <h3 className={sc.education__title}>Education & Experience</h3>
      <div className={sc['education__item-container']}>
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

export default Education;