import "./calc.css";
import { useState } from "react";

function Calculator() {
  let [processed, setProcessed] = useState("");
  let [input, setInput] = useState("0");
  let [prev, setPrev] = useState();

  let digits = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
  let ops = new Set(["+", "-", "*", "/", "%"]);

  let buttons = [
    ["(", ")", "%", "AC"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];
  return (
    <div className="containerDiv">
      <div className="textDiv">
        <h6
          style={{
            textAlign: "right",
          }}
        >
          {processed}
        </h6>
        <h3
          style={{
            textAlign: "right",
          }}
        >
          {input}
        </h3>
      </div>
      <div className="buttonsDiv">
        {buttons.map(function (row, ri) {
          return (
            <div
              key={ri}
              style={{
                display: "flex",
              }}
            >
              {row.map(function (item, ci) {
                return (
                  <button
                    key={ci}
                    className={item === "=" ? "calcbuttonseq" : "calcbuttons"}
                    style={{
                      flexGrow: 1,
                    }}
                    onClick={function () {
                      if (item === "=") {
                        let output = eval(input);
                        setProcessed(String(input));
                        setInput(String(output));
                        setPrev(undefined);
                      } else {
                        setInput((old) => {
                          if (ops.has(prev) && ops.has(item)) {
                            return old.slice(0, -1) + item;
                          } else if (prev === undefined) {
                            setProcessed("Ans=" + old);
                            if (ops.has(item)) {
                              return old + item;
                            } else {
                              return item;
                            }
                          } else {
                            return old + item;
                          }
                        });
                        setPrev(item);
                      }
                    }}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calculator;
