import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { ErrorAd } from "./ErrorAd";

export const TasksCard = () => {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  if (loading) return <Loading />;
  if (error) return <ErrorAd />;
  if (!tasks) return <h1>Cargando tareas...</h1>;

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 py-5">
        <h1 className="text-center mb-5 fw-bold text-primary">Mis Tareas</h1>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            {/* 🔹 recorremos el array con map */}
            {tasks.map((task) => (
              <div key={task.id} className="card shadow-sm border-0 mb-3">
                <div className="card-body p-4">
                  <h5 className="card-title fw-semibold">{task.title}</h5>
                  <p className="card-text text-muted">{task.description}</p>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-primary">
                      Editar
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
