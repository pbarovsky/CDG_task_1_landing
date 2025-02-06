import React, { useState } from "react";
import { InputGroup } from "../molecules/InputGroup";
import { TextAreaField } from "../atoms/TextAreaField";
import { Button } from "../atoms/Button";
import { Container } from "../atoms/Container";
import { useIsMobile } from "../../hooks/useIsMobile";
import sc from "./Form.module.css";

const validate = {
  name: (value) => !/^[\p{L}]+\s[\p{L}]+$/u.test(value),
  email: (value) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
};

const errortext = "Please fill this mandatory field";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
  });
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);
  const isMobile = useIsMobile(500);

  const handleBlur = (value, type, setError) => {
    const isError = validate[type](value);
    setError(isError ? errortext : "");

    setIsValid((prev) => ({
      ...prev,
      [type]: !isError,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitAttempted(true);

    const isNameError = validate.name(name);
    const isEmailError = validate.email(email);

    if (
      isNameError ||
      isEmailError ||
      name.trim() === "" ||
      email.trim() === ""
    ) {
      setNameError(isNameError ? errortext : "");
      setEmailError(isEmailError ? errortext : "");
      return;
    }

    setName("");
    setEmail("");
    setDescription("");
    setNameError("");
    setEmailError("");
    setIsValid({ name: false, email: false });
    setIsSubmitAttempted(false);
  };

  const isSubmitDisabled =
    isSubmitAttempted && (!isValid.name || !isValid.email);

  const buttonText = isMobile ? "Get in touch" : "Submit";

  return (
    <Container className="form_container">
      <div className={sc.form}>
        <h2 className={`${sc.form_title} title_h2`}>
          Let’s discuss your project
        </h2>
        <form id="send" className={sc.form__container} onSubmit={handleSubmit}>
          <div className={sc.field_container}>
            <InputGroup
              nameValue={name}
              emailValue={email}
              onNameChange={(e) => setName(e.target.value)}
              onEmailChange={(e) => setEmail(e.target.value)}
              onNameBlur={(e) =>
                handleBlur(e.target.value, "name", setNameError)
              }
              onEmailBlur={(e) =>
                handleBlur(e.target.value, "email", setEmailError)
              }
              nameError={nameError}
              emailError={emailError}
              nameIsValid={isValid.name}
              emailIsValid={isValid.email}
              validate={validate}
            />
            <TextAreaField
              id="inputTextarea"
              name="projectDescription"
              label="Tell me about your project"
              placeholder="Add here a general description of your idea and target aim"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Button
            btn_text={buttonText}
            type="submit"
            form="send"
            disabled={isSubmitDisabled}
            className={sc.btn_submit}
          />
        </form>
      </div>
    </Container>
  );
};
