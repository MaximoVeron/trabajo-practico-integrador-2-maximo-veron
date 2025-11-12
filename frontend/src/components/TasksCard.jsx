import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { ErrorAd } from "./ErrorAd";
import { Link } from "react-router";
import { PutTask } from "./PutTask";

export const TasksCard = () => {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEdit, setEdit] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const resp = await fetch("http://localhost:3000/api/tasks-by-user", {
          credentials: "include", // si necesitás cookies
        });
        const data = await resp.json();
        setTasks(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const resp = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!resp.ok) {
        throw new Error("Error al eliminar la tarea");
      }

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorAd />;
  if (!tasks) return <h1>Cargando tareas...</h1>;

  const handleCancelModalEdit = () => {
    setEdit(0);
  };

  const handleEditWhithModal = async (id, formData) => {
    try {
      const resp = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      if (!resp.ok) {
        throw new Error("Error al actualizar la tarea");
      }

      const updatedTask = await resp.json();
      setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
      setEdit(0);
      alert("Tarea actualizada exitosamente");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold text-primary">Mis Tareas</h1>
          <Link className="btn btn-primary" to={"/createtask"}>
            + Nueva Tarea
          </Link>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            {tasks.length === 0 ? (
              <div className="alert alert-info text-center">
                No tienes tareas todavía. ¡Crea una nueva!
              </div>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className="card shadow-sm border-0 mb-3">
                  <div className="card-body p-4">
                    <h5 className="card-title fw-semibold">{task.title}</h5>
                    <p className="card-text text-muted">{task.description}</p>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => setEdit(task.id)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(task.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                  {isEdit === task.id && (
                    <PutTask
                      task={task}
                      onCancel={handleCancelModalEdit}
                      onPut={handleEditWhithModal}
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
