import React, { useState } from "react";
import "./Cal.css";

function Cal() {
  let firstOperand = "";
  let secondOperand = "";
  let operator = "";
  let ans = "";
  const [finalAns, setFinalAns] = useState("");

  function concatenateOperands(event){
    if(operator){
      secondOperand = secondOperand + event.target.textContent;
      console.log(secondOperand)
    }else{
      firstOperand = firstOperand + event.target.textContent;
      console.log(firstOperand);
    }
  }
  function assignOperator(event){
    operator = event.target.textContent;
  }
  function clearScreen(){
    setFinalAns("");
  }
  function calculateAns(){
    if(operator === "+"){
      ans = parseInt(firstOperand) + parseInt(secondOperand);
    }else if(operator === "-"){
      ans = parseInt(firstOperand) - parseInt(secondOperand);
    }else if(operator === "x"){
      ans = parseInt(firstOperand) * parseInt(secondOperand);
    }else if(operator === "/"){
      ans = parseInt(firstOperand) / parseInt(secondOperand);
    }
    setFinalAns(ans);
    console.log(ans);
  }
  return (
    <div className="body-div">
      <div className="container">
        <div className="output-div">
          <div id="output-area">
            {finalAns}
          </div>
        </div>
        <div className="buttons-div">
          <div className="buttons" id="row1-buttons">
            <button onClick={clearScreen}>C</button>
            <button>+/-</button>
            <button>$</button>
            <button onClick={assignOperator}>/</button>
          </div>
          <div className="buttons" id="row2-buttons">
            <button onClick={concatenateOperands}>7</button>
            <button onClick={concatenateOperands}>8</button>
            <button onClick={concatenateOperands}>9</button>
            <button onClick={assignOperator}>x</button>
          </div>
          <div className="buttons" id="row3-buttons">
            <button onClick={concatenateOperands}>4</button>
            <button onClick={concatenateOperands}>5</button>
            <button onClick={concatenateOperands}>6</button>
            <button onClick={assignOperator}>-</button>
          </div>
          <div className="buttons" id="row4-buttons">
            <button onClick={concatenateOperands}>1</button>
            <button onClick={concatenateOperands}>2</button>
            <button onClick={concatenateOperands}>3</button>
            <button onClick={assignOperator}>+</button>
          </div>
          <div className="buttons" id="row5-buttons">
            <button id="zero-button" onClick={concatenateOperands}>0</button>
            <button>.</button>
            <button onClick={calculateAns}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cal;
