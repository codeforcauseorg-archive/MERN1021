import { useContext } from "react";
import { UserContext } from "../App";
import firebaseApp from "../utils/firebase";

export default function Home() {
  let { user } = useContext(UserContext);
  return (
    <div>
      <h1>This is home page of {user.displayName}</h1>
      <button
        onClick={function () {
          firebaseApp.auth().signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}
