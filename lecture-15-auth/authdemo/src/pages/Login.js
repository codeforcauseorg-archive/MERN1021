import React, { useContext } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import { UserContext } from "../App";
import firebaseApp from "../utils/firebase";
import firebase from "firebase/compat";

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

let Login = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>My App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()} />
    </div>
  );
};

export default Login;
