import React from "react";
import sc from "./TextAreaField.module.css";

const TextAreaField = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className={sc['textarea-field__wrapper']}>
      <label htmlFor={id} className={sc['textarea-field__label']}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        className={sc['textarea-field__textarea']}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default TextAreaField;
