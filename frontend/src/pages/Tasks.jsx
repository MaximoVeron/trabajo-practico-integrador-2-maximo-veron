import Footer from "../components/Footer";

export const Tasks = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 py-5">
        <h1 className="text-center mb-5 fw-bold text-primary">Mis Tareas</h1>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="card shadow-sm border-0 mb-3">
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold">Tarea de ejemplo 1</h5>
                <p className="card-text text-muted">
                  Descripción de la primera tarea pendiente.
                </p>
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
            <div className="card shadow-sm border-0 mb-3">
              <div className="card-body p-4">
                <h5 className="card-title fw-semibold">Tarea de ejemplo 2</h5>
                <p className="card-text text-muted">
                  Descripción de la segunda tarea pendiente.
                </p>
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
            <div className="text-center mt-4">
              <button className="btn btn-primary btn-lg px-5">
                + Agregar Nueva Tarea
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
