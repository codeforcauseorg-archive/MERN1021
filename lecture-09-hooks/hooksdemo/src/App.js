import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  useEffect(function(){

    console.log(count);

  }, [count])

  let inc = function(){
    setCount((old)=> old+1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={function () {
          inc();
        }}
      >
        +
      </button>
      <button
        onClick={function () {
          inc();
          inc();
          inc();
        }}
      >
        +3
      </button>
    </div>
  );
}

export default App;
