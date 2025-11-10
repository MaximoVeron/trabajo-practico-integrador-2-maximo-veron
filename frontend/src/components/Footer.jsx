import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark fixed-bottom text-light py-3 border-top">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-2 mb-md-0">
            <small className="text-muted">
              © {new Date().getFullYear()} Mi Aplicación — Todos los derechos
              reservados.
            </small>
          </div>
          <div className="d-flex gap-3">
            <a href="/home" className="text-muted text-decoration-none small">
              Inicio
            </a>
            <a
              href="/characters"
              className="text-muted text-decoration-none small"
            >
              Personajes
            </a>
            <a href="/tasks" className="text-muted text-decoration-none small">
              Tareas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
