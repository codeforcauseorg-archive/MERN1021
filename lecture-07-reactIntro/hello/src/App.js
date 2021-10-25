import { useState } from "react";


function App() {

  let [data, setData] = useState("");
  let [lines, setLines] = useState([]);

  let handleChange = function(event){
    console.log(event.target.value);
    setData(event.target.value);
  }

  let handleClick = function(event){
    // let newLine = [...lines]
    // // let newLine = lines.slice()
    // newLine.push(data)
    // // console.log(newLine)
    // setLines(newLine);
    setLines(lines.concat([data]))
    setData("")
  }

  let temp  = 0;

  return (
    <div className="App">
      <input value={data} onChange={handleChange}></input>
      <button onClick={handleClick}>Click to Add</button>
      {lines.map(function(item, idx){
        return <h3 key={idx}>{item}</h3>
      })}
      {/* {temp === 0 ? <h1>Helllo</h1> : <h2>Bye</h2>} */}
      {temp === 0 && <h2>Bye</h2>}
    </div>
  );
}

export default App;
