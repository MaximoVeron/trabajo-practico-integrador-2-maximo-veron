import Footer from "../components/Footer";

export const ProfilePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <h2 className="card-title text-center mb-4 fw-bold text-primary">
                  Mi Perfil
                </h2>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Nombre de Usuario
                  </label>
                  <p className="text-muted">usuario_ejemplo</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>
                  <p className="text-muted">usuario@ejemplo.com</p>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Nombre</label>
                  <p className="text-muted">Nombre Apellido</p>
                </div>
                <div className="text-center mt-4">
                  <button className="btn btn-primary px-4">
                    Editar Perfil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
