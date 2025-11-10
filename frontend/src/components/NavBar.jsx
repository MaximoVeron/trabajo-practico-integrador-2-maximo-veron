import { Link, useNavigate } from "react-router";

export const NavBar = () => {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem("isLogged") === "true";
  const handleLogOut = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };
  return isLogged ? (
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Mi Aplicación
        </a>
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
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tareas">
                Tareas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Perfil
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/characters">
                Personajes divertidos...
              </Link>
            </li>
            <li className="nav-item">
              <button type="button" onClick={handleLogOut}>
                salir
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Mi Aplicación
        </a>
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
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
