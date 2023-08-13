import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Buttons />
    </div>
  );
}

function Buttons() {
  return (
    <div className="buttons-wrapper">
      <div className="button">7</div>
      <div className="button">8</div>
      <div className="button">9</div>
      <div className="button action-btn">X</div>
      <div className="button">4</div>
      <div className="button">5</div>
      <div className="button">6</div>
      <div className="button action-btn">÷</div>
      <div className="button">1</div>
      <div className="button">2</div>
      <div className="button">3</div>
      <div className="button action-btn">-</div>
      <div className="button">0</div>
      <div className="button action-btn">.</div>
      <div className="button action-btn">=</div>
      <div className="button action-btn">+</div>
    </div>
  );
}

export default App;
