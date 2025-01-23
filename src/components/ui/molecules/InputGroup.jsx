import { InputField } from "../atoms/InputField";
import { MailIcon, PersonIcon, WarningIcon } from "../atoms/Icons";
import sc from "./InputGroup.module.css";

export const InputGroup = ({
  nameValue,
  emailValue,
  onNameChange,
  onEmailChange,
  onNameBlur,
  onEmailBlur,
  nameError,
  emailError,
  nameIsValid,
  emailIsValid,
  validate,
}) => (
  <div className={sc.input_group}>
    <InputField
      id="username"
      name="username"
      label="Your full name"
      placeholder="Name Surname"
      value={nameValue}
      onChange={onNameChange}
      onBlur={onNameBlur}
      error={nameError}
      icon={PersonIcon}
      errorIcon={WarningIcon}
      validate={validate.name}
      isValid={nameIsValid}
    />
    <InputField
      id="email"
      name="email"
      label="Your email"
      placeholder="name@example.com"
      value={emailValue}
      onChange={onEmailChange}
      onBlur={onEmailBlur}
      error={emailError}
      icon={MailIcon}
      errorIcon={WarningIcon}
      validate={validate.email}
      isValid={emailIsValid}
    />
  </div>
);
