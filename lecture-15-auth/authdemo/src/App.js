import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import BaseRoutes from "./BaseRoutes";
import axiosAuth from "./utils/axiosAuth";
import firebaseApp from "./utils/firebase";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((newUser) => {
      if(newUser){
        newUser.getIdToken().then((token)=>{
          axiosAuth.defaults.headers["authorization"] = "Bearer "+token;
          setUser(newUser);
        })
      }
      
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
