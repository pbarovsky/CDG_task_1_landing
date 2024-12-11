import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import MailIcon from "../Icons/MailIcon";
import PersonIcon from "../Icons/PersonIcon";
import WarningIcon from "../Icons/WarningIcon";
import Button from "../Button";
import sc from "./Form.module.css";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    projectDescription: "",
  };

  const validate = {
    name: (value) => !/^[\p{L}]+\s[\p{L}]+$/u.test(value),
    email: (value) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  };

  const { formData, errors, handleChange, handleBlur, resetForm } = useForm(
    initialValues,
    validate
  );

  const [reset, setReset] = useState(false);
  const [isValidationTriggered, setIsValidationTriggered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Устанавливаем флаг для активации ошибок
    setIsValidationTriggered(true);

    // Обрабатываем валидацию для всех полей
    handleBlur({ target: { name: "name", value: formData.name } });
    handleBlur({ target: { name: "email", value: formData.email } });

    // Проверяем, есть ли ошибки
    if (errors.name || errors.email || !formData.name || !formData.email) {
      return;
    }

    // Успешная отправка
    resetForm();
    setIsValidationTriggered(false); // Сбрасываем валидацию
    setReset(true);
    setTimeout(() => setReset(false), 0); // Сбрасываем состояние reset
    console.log("Form submitted successfully!");
  };

  return (
    <div className={sc.form}>
      <h2 className={sc.form__title}>Let’s discuss your project</h2>
      <form id="send" className={sc.form__wrapper} onSubmit={handleSubmit}>
        <div className={sc.form__inputs}>
          <InputField
            id="inputName"
            name="name"
            label="Your full name"
            type="text"
            placeholder="Name Surname"
            value={formData.name}
            onChange={handleChange}
            onBlur={(e) => {
              handleBlur(e); // Срабатывает при потере фокуса
              setIsValidationTriggered(true); // Фиксируем активацию ошибок
            }}
            error={isValidationTriggered && errors.name}
            icon={PersonIcon}
            errorIcon={WarningIcon}
            reset={reset}
          />
          <InputField
            id="inputEmail"
            name="email"
            label="Your email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={(e) => {
              handleBlur(e); // Срабатывает при потере фокуса
              setIsValidationTriggered(true); // Фиксируем активацию ошибок
            }}
            error={isValidationTriggered && errors.email}
            icon={MailIcon}
            errorIcon={WarningIcon}
            reset={reset}
          />
        </div>
        <TextAreaField
          id="inputTextarea"
          name="projectDescription"
          label="Tell me about your project"
          placeholder="Add here a general description of your idea and target aim"
          value={formData.projectDescription}
          onChange={handleChange}
        />
        <Button
          btn_text="Submit"
          type="submit"
          form="send"
          disabled={
            isValidationTriggered &&
            (errors.name || errors.email || !formData.name || !formData.email)
          }
        />
      </form>
    </div>
  );
};

export default Form;