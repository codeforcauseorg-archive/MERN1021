import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BaseRoutes from "./BaseRoutes";
import firebaseApp from "./utils/firebase";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <BaseRoutes />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export { App, UserContext };
