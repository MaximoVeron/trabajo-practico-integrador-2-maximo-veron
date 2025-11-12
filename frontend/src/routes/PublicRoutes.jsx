import { Navigate, Outlet } from "react-router";
import { NavBar } from "../components/NavBar";
import Footer from "../components/Footer";

export const PublicRoutes = () => {
  const isLogged = localStorage.getItem("isLogged");

  return !isLogged ? (
    <>
      <NavBar /> <Outlet /> <Footer />
    </>
  ) : (
    <Navigate to="/home" />
  );
};
