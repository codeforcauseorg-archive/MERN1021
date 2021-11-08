import { Routes, Route } from "react-router";
import { AuthGaurd } from "./gaurds/AuthGaurd";
import UserGaurd from "./gaurds/UserGaurd";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function BaseRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthGaurd>
            <Home />
          </AuthGaurd>
        }
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<UserGaurd><Login /></UserGaurd>} />
    </Routes>
  );
}
