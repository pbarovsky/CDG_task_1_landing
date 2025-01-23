import sc from "./Info.module.css";

export const Info = ({ className = "", boldText = "", paragraphText = "" }) => {
  return (
    <div className={`${sc.info} ${className}`}>
      <div className={sc.line}></div>
      <p className={`${sc.info_desc} body_text`}>
        <b className={sc.info_bold_text}>{boldText}</b> {paragraphText}
      </p>
    </div>
  );
};
