import React, { useState } from 'react';
import "./style.css"

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.value);
  }

  const handleClear = () => {
    setValue("");
  }

  const handleCalculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  }

  return (
    <div className="calc b">
      <input id="res" type="text" value={value} />
      <br />
      <button onClick={handleClick} value="1">1</button>
      <button onClick={handleClick} value="2">2</button>
      <button onClick={handleClick} value="3">3</button>
      <button onClick={handleClick} value="4">4</button>
      <br/>
      <button onClick={handleClick} value="5">5</button>
      <button onClick={handleClick} value="6">6</button>
      <button onClick={handleClick} value="7">7</button>
      <button onClick={handleClick} value="8">8</button>
      <br/>
      <button onClick={handleClick} value="9">9</button>
      <button onClick={handleClick} value="0">0</button>
      <button onClick={handleClear}>Clear</button>
      <br/>
      <button onClick={handleClick} value="+">+</button>
      <button onClick={handleClick} value="-">-</button>
      <button onClick={handleClick} value="*">*</button>
      <button onClick={handleClick} value="/">/</button>
      <br />
      <button onClick={handleCalculate}>=</button>
    </div>
  );
}

export default Calculator;
