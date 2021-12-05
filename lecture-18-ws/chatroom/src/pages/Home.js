import { useContext, useEffect, useState } from "react";
import firebaseApp from "../utils/firebaseApp";
import "../css/chats.css";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { UserContext } from "../App";
import socketio from "socket.io-client";

export default function Home() {
  let { user } = useContext(UserContext);
  let [text, setText] = useState("");
  let [socket, setSocket] = useState();
  let [chats, setChats] = useState([]);

  useEffect(function () {
    let soc = socketio.connect("http://localhost:5000/");

    soc.on("connect", function () {
      setSocket(soc);
    });

    soc.on("broadcast", function (payload) {
      setChats(function (old) {
        let copy = [...old];
        copy.push(payload);
        return copy;
      });
    });

    soc.on("disconnect", function () {
      setSocket(undefined);
    });

    return () => {
      if (soc) {
        soc.close();
      }
    };
  }, []);

  return (
    <div className="root">
      <div className="chats">
        {chats.map(function (chat, index) {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                alt={chat.user}
                src={chat.image}
                style={{
                  margin: "8px",
                }}
              />
              <Typography
                style={{
                  flexGrow: 1,
                }}
              >
                {chat.text}
              </Typography>
            </div>
          );
        })}
      </div>

      <div className="sender">
        <Avatar
          alt={user.displayName}
          src={user.photoURL}
          style={{
            margin: "8px",
          }}
        />
        <TextField
          style={{
            flexGrow: 1,
          }}
          variant="outlined"
          value={text}
          onChange={function (event) {
            setText(event.target.value);
          }}
        />
        <Button
          disabled={!socket}
          variant="contained"
          style={{
            margin: "0px 8px",
          }}
          onClick={function () {
            socket.emit("message", {
              text: text,
              user: user.displayName,
              image: user.photoURL,
            });

            setText("");
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
