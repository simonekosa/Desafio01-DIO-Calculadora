import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row, Title } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const subtract = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtract));
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide));
    }
  };

  const handlePercentNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("%");
    } else {
      const percent = Number(firstNumber) / 100;
      setCurrentNumber(String(percent));
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "*":
          handleMultNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        case "%":
          handlePercentNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Title>
        <h1>Minha Calculadora</h1>
        <h6>
          Feito por: <a href="https://github.com/simonekosa">Simone Kosa</a>
        </h6>
      </Title>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="AC" color="grey" onClick={handleOnClear} />
          <Button
            label="+/-"
            color="grey"
            onClick={() => handleAddNumber("+/-")}
          />
          <Button label="%" color="grey" onClick={handlePercentNumbers} />
          <Button label="/" color="Orange" onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="X" color="orange" onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" color="orange" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" color="orange" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="00" onClick={() => handleAddNumber("00")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="," onClick={() => handleAddNumber(",")} />
          <Button label="=" color="orange" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};
export default App;
