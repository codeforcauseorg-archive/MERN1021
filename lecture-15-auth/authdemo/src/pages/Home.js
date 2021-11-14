import { useContext } from "react";
import { UserContext } from "../App";
import axiosAuth from "../utils/axiosAuth";
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
      <button
        onClick={function () {
          axiosAuth.get("http://localhost:5050/").then((response) => {
            console.log(response.data);
          });
        }}
      >
        Ping Server
      </button>
    </div>
  );
}
