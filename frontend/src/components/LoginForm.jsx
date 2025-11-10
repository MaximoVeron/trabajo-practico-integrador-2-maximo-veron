import React from "react";

const LoginForm = () => {
  return (
    <form
      className="p-4 rounded shadow bg-light"
      style={{ maxWidth: 400, margin: "2rem auto" }}
    >
      <h2 className="mb-4 text-center">Iniciar Sesión</h2>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Ingresar
      </button>
    </form>
  );
};

export default LoginForm;
