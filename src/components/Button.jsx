import sc from "./Button.module.css";
import ArrowIcon from "./Icons/ArrowIcon";

const Button = ({ btn_text, type = "", form = "", disabled = false }) => {
  return (
    <div className={sc["btn-container"]}>
      <button
        type={type || undefined}
        form={form || undefined}
        className={sc.btn}
        disabled={disabled}
      >
        {btn_text}
        <ArrowIcon className={sc.icon} />
      </button>
    </div>
  );
};

export default Button;
