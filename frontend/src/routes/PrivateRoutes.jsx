import { Navigate, Outlet } from "react-router";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";
//porque importar navbar aca?

export const PrivateRoutes = () => {
  const isLogged = localStorage.getItem("isLogged");

  return isLogged ? (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
