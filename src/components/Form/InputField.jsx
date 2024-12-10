import React, { useState, useEffect } from "react";
import sc from "./InputField.module.css";

const InputField = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  icon: Icon,
  errorIcon: ErrorIcon,
  disabled = false,
  reset,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur(e);
    setIsValid(!error && e.target.value !== "");
  };

  // Сброс состояния при изменении пропа reset
  useEffect(() => {
    if (reset) {
      setIsFocused(false);
      setIsValid(false);
    }
  }, [reset]);

  // Синхронизация состояния isValid с value и error
  useEffect(() => {
    setIsValid(!error && value !== "");
  }, [error, value]);

  return (
    <div className={sc["input-field__wrapper"]}>
      <label htmlFor={id} className={sc["input-field__label"]}>
        {label} <b className={sc["input-field__star-red"]}>*</b>
      </label>
      <div className={sc["input-field__wrapper"]}>
        <input
          type={type}
          id={id}
          name={name}
          className={`${sc["input-field__input"]} ${
            error ? sc["input-field__input--error"] : ""
          } ${isFocused && !error ? sc["input-field__input--focused"] : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={disabled}
          autoComplete="off"
        />
        {error ? (
          <ErrorIcon
            className={`${sc["input-field__icon"]} ${sc["input-field__icon--error"]}`}
          />
        ) : (
          <Icon
            className={`${sc["input-field__icon"]} ${
              isFocused || isValid ? sc["input-field__icon--focused"] : ""
            }`}
          />
        )}
      </div>
      {error && (
        <p className={sc["input-field__error-message"]}>
          Please fill this mandatory field
        </p>
      )}
    </div>
  );
};

export default InputField;