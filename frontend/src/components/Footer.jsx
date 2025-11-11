import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark fixed-bottom text-white py-3 border-top">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-2 mb-md-0 text-white">
            <small className="text-muted text-white">
              © {new Date().getFullYear()} Mi Aplicación — Todos los derechos
              reservados.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
