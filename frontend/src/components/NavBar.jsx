import { Link, useNavigate } from "react-router";

export const NavBar = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("isLogged") === "true";
  const handleLogOut = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };
  return isLogged ? (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/home">
          Mi Aplicación
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tasks">
                Tareas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/characters">
                Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Perfil
              </Link>
            </li>
            <li className="nav-item ms-2">
              <button
                type="button"
                className="btn btn-outline-light btn-sm"
                onClick={handleLogOut}
              >
                Salir
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Mi Aplicación
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Registrarse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
