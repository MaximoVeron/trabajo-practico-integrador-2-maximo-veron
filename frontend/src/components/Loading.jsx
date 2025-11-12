export const Loading = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "40vh" }}
    >
      <div
        className="spinner-border text-primary mb-3"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Cargando...</span>
      </div>
      <span className="fs-4 fw-semibold text-primary">Cargando...</span>
    </div>
  );
};
