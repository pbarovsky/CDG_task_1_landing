import sc from "./Container.module.css";

export const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`${sc.container} ${
        className && sc[className] ? sc[className] : ""
      }`}
    >
      {children}
    </div>
  );
};
