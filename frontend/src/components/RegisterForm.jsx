const RegisterForm = () => {
  return (
    <form
      className="p-4 rounded shadow bg-light"
      style={{ maxWidth: 400, margin: "2rem auto" }}
    >
      <h2 className="mb-4 text-center">Registro</h2>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          required
        />
      </div>
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
      <div className="mb-3">
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
      <div className="mb-3">
        <label htmlFor="firstname" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          name="firstname"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          name="lastname"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="dni" className="form-label">
          DNI
        </label>
        <input
          type="text"
          className="form-control"
          id="dni"
          name="dni"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
