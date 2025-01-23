import React, { useState, useEffect } from "react";
import sc from "./InputField.module.css";

export const InputField = ({
  id,
  name,
  label,
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  onBlur,
  error = "",
  icon: Icon,
  errorIcon: ErrorIcon,
  disabled = false,
  validate,
  isValid,
}) => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    const val = e.target.value;
    onChange(e);
    setIsTyping(true);
    if (validate) {
      validate(val);
    }
  };

  const handleInputBlur = (e) => {
    onBlur(e);
    setIsTyping(false);
    if (validate) {
      const val = e.target.value;
      validate(val);
    }
  };

  const hasError = Boolean(error);
  const iconColor = hasError
    ? sc.icon_error
    : isTyping || isValid
    ? sc.icon_valid
    : sc.icon_default;

  useEffect(() => {
    if (!value) {
      setIsTyping(false);
    }
  }, [value]);

  return (
    <div className={sc.input_wrapper}>
      {label && (
        <label htmlFor={id} className={`${sc.input_title} subtitle_2`}>
          {label} <span className={sc.required}>*</span>
        </label>
      )}

      <div className={sc.input_container}>
        <input
          id={id}
          name={name}
          type={type}
          className={`${sc.input} ${
            hasError ? sc.input_error : ""
          } body_text_2`}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          disabled={disabled}
        />
        <div className={sc.icon_container}>
          {hasError && ErrorIcon ? (
            <ErrorIcon className={`${sc.icon} ${sc.icon_error}`} />
          ) : Icon ? (
            <Icon className={`${sc.icon} ${iconColor}`} />
          ) : null}
        </div>
      </div>

      <span
        className={`${sc.error_message} ${
          hasError ? sc.visible : ""
        } text_error`}
      >
        {error}
      </span>
    </div>
  );
};
