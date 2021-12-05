import { Route, Routes } from "react-router";
import AuthGaurd from "./gaurds/AuthGaurd";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default function BaseRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <AuthGaurd>
            <Home />
          </AuthGaurd>
        }
      />
    </Routes>
  );
}
