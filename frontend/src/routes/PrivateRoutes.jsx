import { Navigate, Outlet } from "react-router";
import { NavBar } from "../components/NavBar";
//porque importar navbar aca?

export const PrivateRoutes = () => {
  const isLogged = localStorage.getItem("isLogged");

  return isLogged ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
