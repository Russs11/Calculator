
import './App.css';
import Container from './Componets/Container';
import Btns from './Componets/Btns'
import CalcScreen from './Componets/CalcScreen';




function App() {
  let operand = 0
  let operand2 = 0
  let operator = ""
  function btnNumClickHandler(num) {

    if (operator === "") {
      if (operand === 0) {
        operand = num
      } else {
        operand = operand * 10 + num
      }
    }
    if (operator !== "") {
      if (operand2 === 0) {
        operand2 = num
      } else {
        operand2 = operand2 * 10 + num
      }
    }
    console.log("operand", operand);
    console.log("operand2", operand2);


  }
  function operatorClickHandler(oper) {
    operator = oper

  }
  function allClear() {
    operand = 0
    operand2 = 0
    console.log("operand", operand);
  }
  function equallyClickHandler() {
    if (operator === "+") {
      operand = operand + operand2
      operator = ""
      operand2 = 0

      console.log("res", operand);
    }
    if (operator === "x") {
      operand = operand * operand2
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
          equallyClickHandler={equallyClickHandler} />
      </Container>
    </div>
  );
}

export default App;
