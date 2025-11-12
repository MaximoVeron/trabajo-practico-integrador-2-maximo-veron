import { Navigate, Outlet } from "react-router";
import { NavBar } from "../components/NavBar";

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
