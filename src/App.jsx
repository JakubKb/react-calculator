import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", ".", "+", "*", "-"];

  const updateCalc = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const del = () => {
    if (calc.length === 0) return;
    setCalc(calc.slice(0, -1));
  };

  const calcResult = () => {
    try {
      if (calc === "") return;

      const parts = calc.split(/([+\-*/])/);

      let currentValue = 0;
      let currentOperator = "+";

      for (let part of parts) {
        if (operators.includes(part)) {
          currentOperator = part;
        } else {
          const num = parseFloat(part);
          if (!isNaN(num)) {
            switch (currentOperator) {
              case "+":
                currentValue += num;
                break;
              case "-":
                currentValue -= num;
                break;
              case "*":
                currentValue *= num;
                break;
              case "/":
                currentValue /= num;
                break;
              default:
                break;
            }
          }
        }
      }

      setResult(currentValue.toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className="container">
      <div className="display">
        <h3>
          {result ? <span className="equals">({result})</span> : ""}

          {calc || "0"}
        </h3>
      </div>
      <div className="buttons-wrapper">
        <button className="button" onClick={() => updateCalc("9")}>
          9
        </button>
        <button className="button" onClick={() => updateCalc("8")}>
          8
        </button>
        <button className="button" onClick={() => updateCalc("7")}>
          7
        </button>
        <button className="button" onClick={() => updateCalc("6")}>
          6
        </button>
        <button className="button" onClick={() => updateCalc("5")}>
          5
        </button>
        <button className="button" onClick={() => updateCalc("4")}>
          4
        </button>
        <button className="button" onClick={() => updateCalc("3")}>
          3
        </button>
        <button className="button" onClick={() => updateCalc("2")}>
          2
        </button>
        <button className="button" onClick={() => updateCalc("1")}>
          1
        </button>
        <button className="button" onClick={() => updateCalc("0")}>
          0
        </button>
        <button className="button action-btn" onClick={() => del()}>
          DEL
        </button>
        <button className="button action-btn" onClick={calcResult}>
          =
        </button>
      </div>
      <div className="action-buttons">
        <button className="button action-btn" onClick={() => updateCalc(".")}>
          .
        </button>
        <button className="button action-btn" onClick={() => updateCalc("-")}>
          -
        </button>
        <button className="button action-btn" onClick={() => updateCalc("+")}>
          +
        </button>
        <button className="button action-btn" onClick={() => updateCalc("/")}>
          /
        </button>
        <button className="button action-btn" onClick={() => updateCalc("*")}>
          *
        </button>
      </div>
    </div>
  );
}

export default App;
