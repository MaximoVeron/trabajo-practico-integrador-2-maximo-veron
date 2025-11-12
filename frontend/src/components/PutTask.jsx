import { useForm } from "../hooks/useForm";

export const PutTask = ({ onCancel, onPut, task }) => {
  const { formState, handleChange } = useForm({
    title: task.title,
    description: task.description,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onPut(task.id, formState);
  };

  return (
    <div
      className="modal d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-bold">Editar Tarea</h5>
          </div>
          <div className="modal-body">
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
                  value={formState.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label fw-semibold">
                  Descripción
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  value={formState.description}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary w-100">
                  Actualizar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                  onClick={onCancel}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
