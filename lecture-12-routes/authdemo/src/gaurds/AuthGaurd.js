import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../App";

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(function () {
    navigate(to);
  });

  return <h1>Redirecting to {to}</h1>;
}

export function AuthGaurd({ children }) {
  let { user } = useContext(UserContext);

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return children;
  }
}
