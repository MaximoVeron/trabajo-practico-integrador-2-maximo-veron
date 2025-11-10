import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";

export const LoginForm = () => {
  const { formState, handleChange, handleResetForm } = useForm({
    username: "",
    password: "",
  });
  const { username, password } = formState;
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión
    const resp = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    const data = await resp.json();
    console.log("👉🏻 ~ LoginForm.jsx:20 ~ handleLogin ~ data:", data);
    if (data.ok) {
      alert(data.message);
      localStorage.setItem("isLogged", true);
      navigate("/home");
      handleResetForm();
    } else {
      alert(data.message);
    }
  };
  return (
    <div style={{ paddingTop: 72, paddingBottom: 80 }}>
      <form
        className="p-5 rounded shadow-sm bg-white border"
        onSubmit={handleLogin}
        style={{ maxWidth: 420, margin: "0 auto" }}
      >
        <h2 className="mb-4 text-center fw-bold text-primary">
          Iniciar Sesión
        </h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label fw-semibold">
            Usuario
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="username"
            name="username"
            onChange={handleChange}
            value={username}
            placeholder="Ingresa tu usuario"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label fw-semibold">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control form-control-lg"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
          Ingresar
        </button>
        <div className="text-center">
          <small className="text-muted">
            ¿No tienes cuenta?{" "}
            <a
              href="/register"
              className="text-primary text-decoration-none fw-semibold"
            >
              Regístrate aquí
            </a>
          </small>
        </div>
      </form>
    </div>
  );
};
