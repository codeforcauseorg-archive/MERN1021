import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import BaseRoutes from "./BaseRoutes";
import firebase from "firebase/compat/";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setUser(user);
        console.log(user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BaseRoutes />
    </UserContext.Provider>
  );
}

export { App, UserContext };
