import React,{useRef} from 'react';
//import './App.css';

function Calc() {
  const number1 = useRef(null);
  const number2 = useRef(null);
  var result = useRef(null);
  
  const add = () => {
    const num1 = parseInt(number1.current.value);
    const num2 = parseInt(number2.current.value);

    const sum = num1 + num2;
      result.current.innerText = sum;
  }

  const sub = () => {
    const num1 = parseInt(number1.current.value);
    const num2 = parseInt(number2.current.value);

    const sub = num1 - num2;
      result.current.innerText = sub;
  }

  const mul = () => {
    const num1 = parseInt(number1.current.value);
    const num2 = parseInt(number2.current.value);

    const mul = num1 * num2;
      result.current.innerText = mul;
  }

  const div = () => {
    const num1 = parseInt(number1.current.value);
    const num2 = parseInt(number2.current.value);

    const div = num1 / num2;
      result.current.innerText = div;
  }
  return (
    <div className="App">
      <h1>Calculator</h1>

      Enter Number 1:
      <input type="number" ref={number1} /> <br/><br />
        

      Enter Number 2:
      <input type="number" ref={number2} /> <br/><br />

      <button className='btn' onClick={()=>add()}>+</button>
      <button className='btn' onClick={()=>sub()}>-</button>
      <button className='btn' onClick={()=>mul()}>*</button>
      <button className='btn' onClick={()=>div()}>/</button><br/><br />

        Result: <span ref={result}></span>
    </div>
  );
}


export default Calc;