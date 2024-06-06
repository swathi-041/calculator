import React, { useState } from "react";
import { evaluate, format } from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function handler() {
    try {
      const res = evaluate(input);
      setResult(format(res, { precision: 14 }));
      setError(null);
    } catch (error) {
      console.error("Invalid input", error);
      setResult(null);
      setError("Invalid input");
    }
  }

  function clearInput() {
    setInput('');
    setResult(null);
    setError(null);
  }

  function deleteLastCharacter() {
    setInput(input.slice(0, -1));
  }

  return (
    <div className="calculator">
      <center>
        <h1 style={{ color: "whitesmoke" }}>Calculator</h1>
        <div className="display">
          <input
            type="text"
            className="input"
            name="input"
            value={input}
            readOnly
          />
        </div>
        <div className="result-display">
          {result !== null && <h2>{result}</h2>}
          {error && <h2 style={{ color: 'red' }}>{error}</h2>}
        </div>
        <div className="buttons">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '(', ')', '.', '^', '%'].map((item) => (
            <button key={item} className="button" onClick={() => setInput(input + item)}>{item}</button>
          ))}
          <button className="button special" onClick={clearInput}>C</button>
          <button className="button special" onClick={handler}>=</button>
          <button className="button wide" onClick={deleteLastCharacter}>Del</button>
          {['sqrt(', 'log(', 'sin(', 'cos(', 'tan(', 'asin(', 'acos(', 'atan(', 'abs(', 'ceil(', 'floor(', 'round(', 'exp('].map((item) => (
            <button key={item} className="button function" onClick={() => setInput(input + item)}>{item}</button>
          ))}
          <button className="button function" onClick={() => setInput(input + 'PI')}>PI</button>
          <button className="button function" onClick={() => setInput(input + 'E')}>E</button>
          <button className="button function" onClick={() => setInput(input + 'ln(')}>ln</button>
          <button className="button function" onClick={() => setInput(input + 'pow(')}>pow</button>
        </div>
      </center>
    </div>
  );
}

export default App;
