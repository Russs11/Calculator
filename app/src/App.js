
import './App.css';
import Container from './Componets/Container';
import Btns from './Componets/Btns'
import CalcScreen from './Componets/CalcScreen';
import {useState} from 'react'



function App() {
  let operand = 0
  let operand2 = 0
  let operator = ""
  let numAfterDot = ""
  const [operandState, setOperatorState] = useState(0)
  function btnNumClickHandler(num) {

    if (operator === "") {
      if (operand === 0) {
        operand = num
      }
      else {
        operand = operand * 10 + num
      }
    }
    if (numAfterDot === ".") {
      operand = operand / 10
    }


    if (operator !== "") {
      if (operand2 === 0) {
        operand2 = num
      }
      else {
        operand2 = operand2 * 10 + num
      }
    }
    if (numAfterDot === ".") {
      operand2 = operand2 / 10

    }
    console.log("operand", operand);
    console.log("operand2", operand2);

  }
  function btnDotClickHandler(sign) {
    if (sign === ".") {
      numAfterDot = sign

    }
  }

  function operatorClickHandler(oper) {
    operator = oper
    console.log(operator);
  }
  function allClear() {
    operand = 0
    operand2 = 0
    operator = ""
    numAfterDot = ""
    console.log("operand", operand);
    console.log("operand2", operand2);
    console.log("operator", operator);
  }
  function equallyClickHandler() {
    if (operator === "+") {
      operand = operand + operand2
      console.log("res", operand);
      operator = ""
      numAfterDot = ""
      operand2 = 0
    }
    if (operator === "-") {
      operand = operand - operand2
      console.log("res", operand);
      operator = ""
      operand2 = 0
    }

    if (operator === "x") {
      operand = operand * operand2
      console.log("res", operand);
      operator = ""
      operand2 = 0
    }

    if (operator === "/") {
      if (operand2 === 0) {
        console.log("Ошибка");
        allClear()
      }
      operand = operand / operand2
      console.log("res", operand);
      operator = ""
      operand2 = 0
    }

  }

  return (
    <div className="App">
      <Container>
        <CalcScreen>0</CalcScreen>
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
