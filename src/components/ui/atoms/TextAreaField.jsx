import React from "react";
import sc from "./TextAreaField.module.css";

export const TextAreaField = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className={sc["textarea__wrapper"]}>
      <label htmlFor={id} className={`${sc.textarea_title} subtitle_2`}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className={`${sc.textarea} body_text_2`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
