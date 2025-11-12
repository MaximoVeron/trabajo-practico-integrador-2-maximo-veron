import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Link, useNavigate } from "react-router";
import Footer from "../components/Footer";

export const CreateTask = () => {
  const { formState, handleChange, handleResetForm } = useForm({
    title: "",
    description: "",
    is_completed: false,
  });
  const [error, setError] = useState();
  const { title, description } = formState;
  const navigate = useNavigate();

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
      setError(data.errors);
      return;
    }

    alert("Tarea creada exitosamente");
    handleResetForm();
    navigate("/tasks");
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-5">
                <h2 className="text-center mb-4 fw-bold text-primary">
                  Crear Nueva Tarea
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label fw-semibold">
                      Título
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="form-control"
                      value={title}
                      onChange={handleChange}
                      placeholder="Título de la tarea"
                    />
                    {error?.title && (
                      <small className="text-danger">{error.title.msg}</small>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="form-label fw-semibold"
                    >
                      Descripción
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      className="form-control"
                      value={description}
                      onChange={handleChange}
                      placeholder="Descripción de la tarea"
                      rows="4"
                    ></textarea>
                    {error?.description && (
                      <small className="text-danger">
                        {error.description.msg}
                      </small>
                    )}
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 btn-lg"
                    >
                      Crear Tarea
                    </button>
                    <Link
                      className="btn btn-outline-secondary btn-lg"
                      to="/tasks"
                    >
                      Cancelar
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
