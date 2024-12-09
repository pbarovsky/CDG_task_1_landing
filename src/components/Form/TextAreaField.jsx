import React from "react";
import "./TextAreaField.css";

const TextAreaField = ({
  id,
  label,
  placeholder,
  value,
  setValue,
  disabled = false,
}) => {
  return (
    <div className="textarea-field__wrapper">
      <label htmlFor={id} className="textarea-field__label">
        {label}
      </label>
      <textarea
        id={id}
        className="textarea-field__textarea"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

export default TextAreaField;
