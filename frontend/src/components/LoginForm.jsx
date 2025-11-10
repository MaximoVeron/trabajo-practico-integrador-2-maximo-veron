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
        className="p-4 rounded shadow bg-light"
        onSubmit={handleLogin}
        style={{ maxWidth: 400, margin: "2rem auto" }}
      >
        <h2 className="mb-4 text-center">Iniciar Sesión</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
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
        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Ingresar
        </button>
      </form>
    </div>
  );
};
