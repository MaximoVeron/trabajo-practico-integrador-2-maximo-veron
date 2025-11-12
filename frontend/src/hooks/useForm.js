import { useState } from "react";

export const useForm = (initialValue) => {
  const [formState, setFormState] = useState(initialValue);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };
  const handleResetForm = () => {
    setFormState(initialValue);
  };
  return { formState, handleChange, handleResetForm };
};
