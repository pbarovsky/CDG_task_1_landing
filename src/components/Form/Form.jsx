import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import MailIcon from "../Icons/MailIcon";
import PersonIcon from "../Icons/PersonIcon";
import WarningIcon from "../Icons/WarningIcon";
import Button from "../Button";
import sc from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const nameRegex = /^[\p{L}]+\s[\p{L}]+$/u;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isNameValid = nameRegex.test(name);
  const isEmailValid = emailRegex.test(email);

  // Следим за валидностью полей
  useEffect(() => {
    setIsButtonDisabled(!(isNameValid && isEmailValid));
  }, [isNameValid, isEmailValid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setProjectDescription("");
  };

  return (
    <div className={sc.form}>
      <h2 className={sc.form__title}>Let’s discuss your project</h2>
      <form id="send" className={sc.form__wrapper} onSubmit={handleSubmit}>
        <div className={sc.form__inputs}>
          <InputField
            id="inputName"
            label="Your full name"
            type="text"
            placeholder="Name Surname"
            value={name}
            setValue={setName}
            validator={(val) => nameRegex.test(val)}
            icon={PersonIcon}
            errorIcon={WarningIcon}
          />
          <InputField
            id="inputEmail"
            label="Your email"
            type="email"
            placeholder="name@example.com"
            value={email}
            setValue={setEmail}
            validator={(val) => emailRegex.test(val)}
            icon={MailIcon}
            errorIcon={WarningIcon}
          />
        </div>
        <TextAreaField
          id="inputTextarea"
          label="Tell me about your project"
          placeholder="Add here a general description of your idea and target aim"
          value={projectDescription}
          setValue={setProjectDescription}
        />
      </form>
      <Button 
        btn_text="Submit" 
        type="submit" 
        form="send" 
        disabled={isButtonDisabled}
      />
    </div>
  );
};

export default Form;
