
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
  const [value, setValue] = useState("0");

  function allClear() {
    setOperand1("0");
    setOperand2("");
    setOperator("");
    setNumAfterDot("");
    setPercent("");
    setValue("0")
  }

  function good(value) {
    setOperand1(value);
    setValue(value);
    setOperator("");
    setOperand2("");
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
      setValue(parseFloat(operand1 + num).toString());
      if (operand1.length === 9) {
        setOperand1(operand1);
        setValue(operand1);
        return;
      }
    } else if (operator !== "") {
      setOperand2(parseFloat(operand2 + num).toString());
      setValue(parseFloat(operand2 + num).toString());
      if (operand2.length === 9) {
        setOperand2(operand2);
        setValue(operand2);
        return;
      }
    }
    
    if (numAfterDot === "." && operator === "") {
      if (operand1.includes(".")) return;
      setOperand1((operand1 + "." + num).toString());
      setValue((operand1 + "." + num).toString());
      setNumAfterDot("");
      return;
    }

    if (numAfterDot === "." && operator !== "") {
      if (operand2.includes(".")) return;
      setOperand2((operand2 + "." + num).toString());
      setValue((operand2 + "." + num).toString());
      setNumAfterDot("");
    }
  }

  function operatorClickHandler(oper) {
    if (operator === "") {
      setOperator(oper);
      setValue(oper);
    } else {
      equallyClickHandler();
      setOperator(oper);
    }

  }
  function contentClickHandler(content) {
    if (content === "%") {
      setPercent("%");
    }
    
    if (content === "%" && operator === "") {
      setOperand1(Number(operand1) / 100);
      setValue(Number(operand1) / 100);
      
    }
    if (percent === "%" && operator !== "") {
      equallyClickHandler()
    }
    

    if (content === "+/-" && operator === "") {
      setOperand1((operand1 * -1).toString());
      setValue((operand1 * -1).toString());
      return;
    }
    if (content === "+/-" && operator !== "") {
      setOperand2((operand2 * -1).toString());
      setValue((operand2 * -1).toString());
      return;
    }
  }

  function equallyClickHandler() {
    if (operator === "+" && operand1 === "" && operand2 === "") {
      // setOperand1((Number(operand1) + Number(operand2)).toString().slice(0, 9));
      // setValue((Number(operand1) + Number(operand2)).toString().slice(0, 9));
      // setOperator("+")
      // setOperand2("")
      // setPercent("")
      good((Number(operand1) + Number(operand2)).toString().slice(0, 9))
    } 
    if (operator === "+" && operand1 !== "" && operand2 !== "") {
      // setOperand1((Number(operand1) + Number(operand2)).toString().slice(0, 9));
      // setValue((Number(operand1) + Number(operand2)).toString().slice(0, 9));
      // setOperator("+")
      // setOperand2("")
      // setPercent("")
      good((Number(operand1) + Number(operand2)).toString().slice(0, 9));
    } 


    if (operator === "+" && percent === "%") {
      // setOperand1((Number(operand1) + Number(operand1) * Number(operand2) / 100).toString().slice(0, 9)); 
      // setOperator("");
      // setOperand2("");
      // setPercent("");
      good((Number(operand1) + Number(operand1) * Number(operand2) / 100).toString().slice(0, 9));
    }
    if (operator === "-" && operand1 === "" && operand2 === "") {
      // setOperand1((Number(operand1) - Number(operand2)).toString().slice(0, 9));
      // setValue((Number(operand1) - Number(operand2)).toString().slice(0, 9));
      // setOperator("");
      // setOperand2("");
      // setPercent("");
      good((Number(operand1) - Number(operand2)).toString().slice(0, 9));
    }
    if (operator === "-" && operand1 !== "" && operand2 !== "") {
      // setOperand1((Number(operand1) - Number(operand2)).toString().slice(0, 9));
      // setValue((Number(operand1) - Number(operand2)).toString().slice(0, 9));
      // setOperator("");
      // setOperand2("");
      // setPercent("");
      good((Number(operand1) - Number(operand2)).toString().slice(0, 9));
    }
    if (operator === "-" && percent === "%") {
      // setOperand1(Number(operand1) - Number(operand1) * Number(operand2) / 100);
      // setOperator("");
      // setOperand2("");
      // setPercent("");
      good((Number(operand1) - Number(operand1) * Number(operand2) / 100).toString().slice(0, 9));
    }

    if (operator === "x" && operand1 === "" && operand2 === "") {
      // setOperand1((Number(operand1) * Number(operand2)).toString().slice(0, 9));
      // setValue((Number(operand1) * Number(operand2)).toString().slice(0, 9));
      // setOperator("");
      // setOperand2("");
      good((Number(operand1) * Number(operand2)).toString().slice(0, 9));
    }
    if (operator === "x" && operand1 !== "" && operand2 !== "") {
      // setOperand1((Number(operand1) * Number(operand2)).toString().slice(0, 9));
      // setValue((Number(operand1) * Number(operand2)).toString().slice(0, 9));
      // setOperator("");
      // setOperand2("");
      good((Number(operand1) * Number(operand2)).toString().slice(0, 9))
    }

    if (operator === "/" && operand1 === "" && operand2 === "") {
      if (operand2 === "0") {
        setOperand2("Error");
        setOperand1("");
        setOperator("");
        return;
      }
      // setOperand1((Number(operand1) / Number(operand2)).toString().slice(0, 9));
      // setValue((Number(operand1) / Number(operand2)).toString().slice(0, 9));
      // setOperator("");
      // setOperand2("");
      good((Number(operand1) / Number(operand2)).toString().slice(0, 9));
    }
    if (operator === "/" && operand1 !== "" && operand2 !== "") {
      if (operand2 === "0") {
        setOperand2("Error");
        setOperand1("");
        setOperator("");
        return;
      }
      // setOperand1((Number(operand1) / Number(operand2)).toString().slice(0, 9));
      // setValue((Number(operand1) / Number(operand2)).toString().slice(0, 9));
      // setOperator("");
      // setOperand2("");
      good((Number(operand1) / Number(operand2)).toString().slice(0, 9))
    }
  }


  return (
    <div className="App">
      <Container>
        <CalcScreen value={value}
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
