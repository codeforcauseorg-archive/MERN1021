import axios from "axios";
import { useEffect, useState } from "react";

function GitHubApi() {

  let [username, setUsername] = useState("");
  let [user, setUser] = useState();

  useEffect(
    async function () {
      if (username) {
        try {
          let response = await axios.get(
            "https://api.github.com/users/" + username
          );
          setUser(response.data);
        } catch (err) {
          setUser();
        }
      }
    },
    [username]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        value={username}
        onChange={function (event) {
          setUsername(event.target.value);
        }}
      />
      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={user.name}
            height="200px"
            width="200px"
          ></img>
          <h3>{user.name}</h3>
          <h3>{user.login}</h3>
        </div>
      )}
    </div>
  );
}

export default GitHubApi;
