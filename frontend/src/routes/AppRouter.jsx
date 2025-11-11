import { Navigate, Route, Routes } from "react-router";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { CharactersPage } from "../pages/CharactersPage";
import { ProfilePage } from "../pages/ProfilePage";
import { TasksPage } from "../pages/TasksPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
