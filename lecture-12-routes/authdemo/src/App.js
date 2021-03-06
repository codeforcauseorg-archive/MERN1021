import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BaseRoutes from "./BaseRoutes";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <BaseRoutes />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export {App, UserContext};
