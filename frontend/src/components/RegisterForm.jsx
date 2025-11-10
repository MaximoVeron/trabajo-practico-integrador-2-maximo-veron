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
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
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
            value={lastname}
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
