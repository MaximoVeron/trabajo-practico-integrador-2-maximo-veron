import { useState } from "react";
import { ErrorAd } from "../components/ErrorAd";
import { useForm } from "../hooks/useForm";

export const CreateTask = () => {
  const { formState, handleChange, handleResetForm } = useForm({
    title: "",
    description: "",
    is_completed: false,
  });
  const [error, setError] = useState();
  const { title, description } = formState;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
      credentials: "include",
    });

    const data = await resp.json();

    if (data.errors) {
      console.log("retornar el error");
      setError(data.errors);
      return;
    }
    handleResetForm();
    // if (!resp.ok) {
    //   setError(data);
    // }
    // console.log("👉🏻 ~ CreateTask.jsx:20 ~ handleSubmit ~ data:", data);
    // console.log(data.errors.description.msg);
    // console.log(data.errors);
    // if (data.error) setError(data.error);
    // // data.ok ? alert("tarea creada") : alert("error al crear tarea");
    // handleResetForm();
  };
  // if (error) return <ErrorAd />;

  // console.log(error);
  return (
    <form onSubmit={handleSubmit}>
      <ul>
        <li>
          <label htmlFor="title">Titulo</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
          />
          {error?.title && <h2>{error.title.msg}</h2>}
        </li>
        <li>
          <label htmlFor="description">Descripción</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleChange}
          />
          {error?.description && <h2>{error.description.msg}</h2>}
        </li>
        <li>
          <button type="submit">Nueva tarea</button>
        </li>
      </ul>
    </form>
  );
};
