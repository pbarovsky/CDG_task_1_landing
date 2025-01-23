import sc from "./Button.module.css";
import { ArrowIcon } from "./Icons";

export const Button = ({
  btn_text,
  type = "",
  form = "",
  className = "",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      type={type || undefined}
      form={form || undefined}
      className={`${sc.btn} ${className} subtitle_2`}
      disabled={disabled}
      onClick={onClick}
    >
      {btn_text}
      <ArrowIcon className={sc.icon} />
    </button>
  );
};
