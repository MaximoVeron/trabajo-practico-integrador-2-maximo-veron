import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

const RegisterForm = () => {
  const { formState, handleChange, handleResetForm } = useForm({
    username: "",
    email: "",
    password: "",
    name: "",
    lastname: "",
    dni: "",
  });
  const navigate = useNavigate();
  const { username, email, password, name, lastname, dni } = formState;
  const handleRegister = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    const data = await resp.json();
    console.log(data);
    data.ok ? alert(data.message) : alert("Error al registrar usuario");
    if (data.ok) {
      handleResetForm();
      navigate("/login");
    }
  };

  return (
    <div style={{ paddingTop: 72, paddingBottom: 80 }}>
      <form
        className="p-5 rounded shadow-sm bg-white border"
        style={{ maxWidth: 480, margin: "0 auto" }}
        onSubmit={handleRegister}
      >
        <h2 className="mb-4 text-center fw-bold text-primary">Crear Cuenta</h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={handleChange}
              value={username}
              placeholder="Usuario"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-semibold">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handleChange}
            name="password"
            placeholder="Mínimo 6 caracteres"
            required
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Nombre"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastname" className="form-label fw-semibold">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              placeholder="Apellido"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="dni" className="form-label fw-semibold">
            DNI
          </label>
          <input
            type="text"
            className="form-control"
            id="dni"
            name="dni"
            value={dni}
            onChange={handleChange}
            placeholder="12345678"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
          Registrarse
        </button>
        <div className="text-center">
          <small className="text-muted">
            ¿Ya tienes cuenta?{" "}
            <a
              href="/login"
              className="text-primary text-decoration-none fw-semibold"
            >
              Inicia sesión aquí
            </a>
          </small>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
