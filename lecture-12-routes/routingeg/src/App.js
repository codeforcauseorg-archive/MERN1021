import logo from "./logo.svg";
import "./App.css";
import { useLocation } from "react-router-dom";
import { useNavigate, Route, Routes } from "react-router-dom";

function Output() {
  let location = useLocation();
  let navigate = useNavigate();
  console.log(location);

  return (
    <Routes>
      <Route
        path="/active"
        element={
          <div>
            <h1>I am active</h1>
            <button
              onClick={() => {
                navigate("/inactive");
              }}
            >
              Deactivate
            </button>
          </div>
        }
      />
      <Route
        path="/inactive"
        element={
          <div>
            <h1>I am inactive</h1>
            <button
              onClick={() => {
                navigate("/active");
              }}
            >
              Activate
            </button>
          </div>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <img alt="my number" src="/logo192.png" />
      <Output />
    </div>
  );
}

export default App;
