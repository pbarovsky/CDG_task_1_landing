import useForm from "../../hooks/useForm";
import React from "react";
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

  const { formData, errors, handleChange, handleBlur, resetForm } = useForm(initialValues, validate)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.name && !errors.email) {
      // Успешная валидация
      console.log("Form submitted successfully!");
      resetForm();
    }
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
            onBlur={handleBlur}
            error={errors.name}
            icon={PersonIcon}
            errorIcon={WarningIcon}
          />
          <InputField
            id="inputEmail"
            name="email"
            label="Your email"
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            icon={MailIcon}
            errorIcon={WarningIcon}
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
      </form>
      <Button
        btn_text="Submit"
        type="submit"
        form="send"
        disabled={errors.name || errors.email}
      />
    </div>
  );
};

export default Form;
