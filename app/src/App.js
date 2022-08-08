
import './App.css';
import Container from './Componets/Container';
import Btns from './Componets/Btns'
import CalcScreen from './Componets/CalcScreen';
import { useState } from 'react'



function App() {
  const [operand1, setOperand1] = useState("0");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [numAfterDot, setNumAfterDot] = useState("");
  const [percent, setPercent] = useState("");


  function allClear() {
    setOperand1("0");
    setOperand2("");
    setOperator("");
    setNumAfterDot("");
    setPercent("");
  }




  function btnDotClickHandler(sign) {
    if (sign === ".") {
      setNumAfterDot(sign);
    }
  }

  function btnNumClickHandler(num) {
    if (operator === "") {
      setOperand1(parseFloat(operand1 + num).toString());
      if (operand1.length === 9) {
        setOperand1(operand1);
        return;
      }
    } else if (operator !== "") {
      setOperand2(parseFloat(operand2 + num).toString());
      if (operand2.length === 9) {
        setOperand2(operand2);
        return;
      }
    }
    
    if (numAfterDot === "." && operator === "") {
      if (operand1.includes(".")) return;
      setOperand1((operand1 + "." + num).toString());
      setNumAfterDot("");
      return;
    }

    if (numAfterDot === "." && operator !== "") {
      if (operand2.includes(".")) return;
      setOperand2((operand2 + "." + num).toString());
      setNumAfterDot("");
    }

   
  }
  console.log(operand2.length);
  console.log(operand1);
  
  
  




  function operatorClickHandler(oper) {
    if (operator === "") {
      setOperator(oper);
    } else {
      equallyClickHandler();
      setOperator(oper);
    }

  }
  function contentClickHandler(content) {
    if (content === "%") {
      setPercent("%");
    }
    
    if (percent === "%" && operator === "") {
      setOperand1(Number(operand1) / 100);
      return;
    }
    

    if (content === "+/-" && operator === "") {
      setOperand1((operand1 * -1).toString());
      return;
    }
    if (content === "+/-" && operator !== "") {
      setOperand2((operand2 * -1).toString());
      return;
    }
  }

  function equallyClickHandler() {
    if (operator === "+") {
      setOperand1(Number(operand1) + Number(operand2));
      setOperator("")
      setOperand2("")
      setPercent("")
      
    } 

    if (operator === "+" && percent === "%") {
      setOperand1(Number(operand1) + Number(operand1) * Number(operand2)/ 100); 
      setOperator("");
      setOperand2("");
      setPercent("");
    }
    if (operator === "-") {
      setOperand1(Number(operand1) - Number(operand2));
      setOperator("");
      setOperand2("");
      setPercent("");
    }
    if (operator === "-" && percent === "%") {
      setOperand1(Number(operand1) - Number(operand1) * Number(operand2) / 100);
      setOperator("");
      setOperand2("");
      setPercent("");
    }

    if (operator === "x") {
      setOperand1(Number(operand1) * Number(operand2));
      setOperator("");
      setOperand2("");
    }

    if (operator === "/") {
      if (operand2 === "0") {
        setOperand2("Error");
        setOperand1("");
        setOperator("");
        return;
      }
      setOperand1(Number(operand1) / Number(operand2));
      setOperator("");
      setOperand2("");
    }
    

  }


  return (
    <div className="App">
      <Container>
        <CalcScreen operand1={operand1}
          operand2={operand2}
          operator={operator}
          percent={percent}
        /> 
        
        <Btns btnNumClickHandler={btnNumClickHandler}
          allClear={allClear}
          operatorClickHandler={operatorClickHandler}
          equallyClickHandler={equallyClickHandler}
          btnDotClickHandler={btnDotClickHandler}
          contentClickHandler={contentClickHandler}
        />
      </Container>
    </div>
  );
}

export default App;
