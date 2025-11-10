import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark fixed-bottom text-light py-4 mt-auto border-top shadow-lg">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-2 mb-md-0">
          <span className="fw-bold">
            © {new Date().getFullYear()} Mi Aplicación
          </span>{" "}
          — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
