import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Redirect({ to }) {
  let navigate = useNavigate();

  useEffect(function () {
    navigate(to);
  }, [to, navigate]);

  return <h1>Redicting to {to}</h1>;
}
