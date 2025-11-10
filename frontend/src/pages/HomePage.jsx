import { Link } from "react-router";
import Footer from "../components/Footer";

export const HomePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="display-4 fw-bold mb-4 text-primary">
            Trabajo Integrador
          </h1>
          <p className="lead text-muted mb-4">Veron Maximo</p>
          <div className="d-flex gap-3 justify-content-center">
            <Link className="btn btn-primary btn-lg px-4" to="/characters">
              Personajes
            </Link>
            <Link className="btn btn-primary btn-lg px-4" to="/task">
              Tareas
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
