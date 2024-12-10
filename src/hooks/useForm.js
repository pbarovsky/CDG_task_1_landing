import { useState, useEffect } from "react";

// Хук useForm для управления состоянием формы и валидацией
const useForm = (initialValues, validate) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Обработчик изменений в полях формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Обработчик ухода фокуса с поля
  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validate[name](value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Эффект для сброса ошибок, когда поля name и email пусты
  useEffect(() => {
    if (!formData.name && !formData.email) {
      setErrors({});
    }
  }, [formData.name, formData.email]);

  // Функция для сброса формы к начальному состоянию
  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    handleBlur,
    resetForm
  };
};

export default useForm;
