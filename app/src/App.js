
import './App.css';
import Container from './Componets/Container';
import Btns from './Componets/Btns'
import CalcScreen from './Componets/CalcScreen';
import { useState } from 'react'



function App() {
  // let operand = 0
  // let operand2 = 0
  // let operator = ""
  // let numAfterDot = ""
  const [operand1, setOperand1] = useState(0)
  const [operand2, setOperand2] = useState("")
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState(0)
  const [numAfterDot, setNumAfterDot] = useState("")

  function allClear() {
    setOperand1(0);
    setOperand2("");
    setOperator("");
    setResult("");
    setNumAfterDot("");
  }
  function btnNumClickHandler(num) {
    // if (operator === "") {
    //   if (operand === 0) {
    //     operand = num
    //   }
    //   else {
    //     operand = operand * 10 + num
    //   }
    // }
    
    // if (operator !== "") {
      //   if (operand2 === 0) {
        //     operand2 = num
        //   }
        //   else {
          //     operand2 = operand2 * 10 + num
          //   }
          // }
          // if (numAfterDot === ".") {
            //   operand2 = operand2 / 10
            
            // }
            // console.log("operand", operand);
            // console.log("operand2", operand2);
            
            if (operator === "") {
              setOperand1(operand1 + num);
            } else {
              setOperand2(operand2 + num);
            }
            if (numAfterDot === ".") {
              setOperand1((operand1 / 10) + num)
            }
          }




  function btnDotClickHandler(sign) {
    if (sign === ".") {
      setNumAfterDot(sign)
    }
  }

  function operatorClickHandler(oper) {
    setOperator(oper)
  }

  // function equallyClickHandler() {
  //   switch (operator) {
  //     case "+":
  //       setResult(Number(operand1) + Number(operand2));
  //       break;
  //     case "-":
  //       setResult(Number(operand1) - Number(operand2));
  //       break;
  //     case "x":
  //       setResult(Number(operand1) * Number(operand2));
  //       break;
  //     case "/":
  //       setResult(Number(operand1) / Number(operand2));
  //       break;
  //   }
  // }
  function equallyClickHandler() {
    if (operator === "+") {

      setResult(Number(operand1) + Number(operand2))
      // numAfterDot = ""
        setOperator("")
        setOperand2(0)
    }
    if (operator === "-") {
      setResult(Number(operand1) - Number(operand2))
      setOperator("")
      setOperand2(0)
    }

    if (operator === "x") {
      setResult(Number(operand1) * Number(operand2))
      setOperator("")
      setOperand2(0)
    }

    if (operator === "/") {
      if (operand2 === 0 || operand1 === Infinity) {
        allClear()
        setResult("Ошибка");
      }
      setResult(Number(operand1) / Number(operand2))
      setOperator("")
      setOperand2(0)
    }

  }

  return (
    <div className="App">
      <Container>
        <CalcScreen>
          <div className="previous-operand">{operator ? operand1 + operator : ""}</div>
          <div className="current-operand">{result ? result : (!operator ? operand1 : operand2)}</div>
        </CalcScreen>
        <Btns btnNumClickHandler={btnNumClickHandler}
          allClear={allClear}
          operatorClickHandler={operatorClickHandler}
          equallyClickHandler={equallyClickHandler}
          btnDotClickHandler={btnDotClickHandler}
        />
      </Container>
    </div>
  );
}

export default App;
