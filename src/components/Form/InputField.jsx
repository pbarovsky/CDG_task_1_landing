import React, { useState } from "react";
import sc from "./InputField.module.css";

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  setValue,
  validator,
  icon: Icon,
  errorIcon: ErrorIcon,
  disabled = false,
}) => {
  const [error, setError] = useState(false);
  const [touched, setTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const validate = () => {
    setError(!validator(value));
  };

  const isValid = validator(value);

  return (
    <div className={sc["input-field__wrapper"]}>
      <label htmlFor={id} className={sc["input-field__label"]}>
        {label} <b className={sc["input-field__star-red"]}>*</b>
      </label>
      <div className={sc["input-field__wrapper"]}>
        <input
          type={type}
          id={id}
          className={`${sc["input-field__input"]} ${
            error && touched ? sc["input-field__input--error"] : ""
          } ${isFocused && isValid ? sc["input-field__input--focused"] : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setTouched(true);
            validate();
            setIsFocused(false);
          }}
          disabled={disabled}
          autoComplete="off"
        />
        {error && touched ? (
          <ErrorIcon
            className={`${sc["input-field__icon"]} ${sc["input-field__icon--error"]}`}
          />
        ) : (
          <Icon
            className={`${sc["input-field__icon"]} ${
              isFocused || (isValid && !error)
                ? sc["input-field__icon--focused"]
                : ""
            }`}
          />
        )}
      </div>
      {error && touched && (
        <p className={sc["input-field__error-message"]}>
          Please fill this mandatory field
        </p>
      )}
    </div>
  );
};

export default InputField;
