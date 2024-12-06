import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter" style={{}}>
          {count}
        </h3>
        <div style={{ width: "100%" }}>
          <button
            style={{ fontSize: "20px", width: "45px" }}
            display="flex"
            data-testid="minus-button"
            disabled={disabled}
            onClick={() => setCount((prev) => prev - 1)}
          >
            -
          </button>
          <button
            display="flex"
            style={{ marginLeft: "20px", fontSize: "20px", width: "45px" }}
            data-testid="plus-button"
            disabled={disabled}
            onClick={() => setCount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testid="on/off-button"
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
