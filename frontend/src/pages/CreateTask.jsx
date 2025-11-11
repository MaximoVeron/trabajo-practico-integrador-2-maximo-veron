import { ErrorAd } from "../components/ErrorAd";
import { useForm } from "../hooks/useForm";

export const CreateTask = () => {
  const { formState, handleChange, handleResetForm } = useForm({
    title: "",
    description: "",
    is_completed: false,
  });
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
    console.log("👉🏻 ~ CreateTask.jsx:20 ~ handleSubmit ~ data:", data);
    if (!data.ok) return <ErrorAd />;
    handleResetForm();
  };
  return (
    <form onClick={handleSubmit}>
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
        </li>
        <li>
          <button type="submit">Nueva tarea</button>
        </li>
      </ul>
    </form>
  );
};
