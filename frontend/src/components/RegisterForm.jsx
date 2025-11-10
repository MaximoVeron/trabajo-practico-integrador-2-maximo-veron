import { useForm } from "../hooks/useForm";

const RegisterForm = () => {
  const { formState, handleChange, handleResetForm } = useForm({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dni: "",
  });
  const { username, email, password, firstName, lastName, dni } = formState;
  const handleRegister = async (e) => {
    e.preventDefault();
    await fetch("");
    handleResetForm();
  };
  return (
    <div style={{ paddingTop: 72, paddingBottom: 80 }}>
      <form
        className="p-4 rounded shadow bg-light"
        style={{ maxWidth: 400, margin: "2rem auto" }}
        onSubmit={handleRegister}
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
            onChange={handleChange}
            value={username}
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
            onChange={handleChange}
            value={email}
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
            value={password}
            onChange={handleChange}
            name="password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
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
            value={dni}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
