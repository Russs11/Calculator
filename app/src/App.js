
import './App.css';
import Container from './Componets/Container';
import Btns from './Componets/Btns'
import CalcScreen from './Componets/CalcScreen';
import { useState } from 'react'



function App() {
  const [operand1, setOperand1] = useState("0")
  const [operand2, setOperand2] = useState("")
  const [operator, setOperator] = useState("")
  
  const [numAfterDot, setNumAfterDot] = useState("")

  function allClear() {
    setOperand1("0");
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
      setOperand1(parseFloat(operand1 + num).toString());
    } else if (operator !== "") {
      setOperand2(parseFloat(operand2 + num).toString());
    }

    if (numAfterDot === ".") {
      if (operand1.includes(".")) return;
      setOperand1((operand1 + "." + num).toString());
      setNumAfterDot("")
      return

    }

    if (numAfterDot === "." && operator !== "") {
      if (operand2.includes(".")) return;
      setOperand2((operand2 + "." + num).toString());
      setNumAfterDot("")

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
    
    if (operator === "%") {
      setOperand1(Number(operand1) / 100).toString()
      setOperator("")
      setOperand2("")
    }
    }
    

  return (
    <div className="App">
      <Container>
        <CalcScreen>

          <div className="previous-operand">{operator ? operand1 + operator : ""}</div>
          <div className="current-operand">{(!operator ? operand1 : operand2)}</div>
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
