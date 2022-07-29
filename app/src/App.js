
import './App.css';
import Container from './Componets/Container';
import Btns from './Componets/Btns'
import CalcScreen from './Componets/CalcScreen';
import { useState } from 'react'



function App() {
  const [operand1, setOperand1] = useState("")
  const [operand2, setOperand2] = useState("")
  const [operator, setOperator] = useState("")

  const [numAfterDot, setNumAfterDot] = useState("")

  function allClear() {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setNumAfterDot("");
  }



  function btnDotClickHandler(sign) {
    if (sign === ".") {
      setNumAfterDot(sign)
    }
  }
  function btnNumClickHandler(num) {
    if (operator === "") {
      setOperand1(operand1 + Number(num));
    } else {
      setOperand2(operand2 + num);
    }
    if (numAfterDot === ".") {
      if (operand1.includes("."))return; 
      setOperand1(operand1 + "." + Number(num));
      return;
    }
  }





  function operatorClickHandler(oper) {
    setOperator(oper)
  }


  function equallyClickHandler() {
    if (operator === "+") {
      setOperand1(Number(operand1) + Number(operand2))
      // numAfterDot = ""
      setOperator("")
      setOperand2("")
    }
    if (operator === "-") {
      setOperand1(Number(operand1) - Number(operand2))
      setOperator("")
      setOperand2("")
    }

    if (operator === "x") {
      setOperand1(Number(operand1) * Number(operand2))
      setOperator("")
      setOperand2("")
    }

    if (operator === "/") {
      if (operand2 === 0) {
        allClear()
        setOperand1("Ошибка");
      }
      setOperand1(Number(operand1) / Number(operand2))
      setOperator("")
      setOperand2("")
    }

  }

  return (
    <div className="App">
      <Container>
        <CalcScreen>
          <div className="previous-operand">{operator ? operand1 + operator : ""}</div>
          <div className="current-operand">{operand1 ? operand1 : (!operator ? operand1 : operand2)}</div>
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
