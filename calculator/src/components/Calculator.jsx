import { useState } from "react";

export const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
  const [expressionHistory, setExpressionHistory] = useState("");

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
      if (expressionHistory.includes("=")) {
        setExpressionHistory("");
      }
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  };
  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplayValue("0.");
      setWaitingForSecondOperand(false);
      if (expressionHistory.includes("=")) {
        setExpressionHistory("");
      }
      return;
    }
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const toggleSign = () => {
    setDisplayValue((prev) => (parseFloat(prev) * -1).toString());
  };

  const inputPercent = () => {
    setDisplayValue((prev) => (parseFloat(prev) / 100).toString());
  };

  const backspace = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue("0");
    }
  };
  const calculate = (operand1, operand2, op) => {
    if (isNaN(operand1) || isNaN(operand2)) {
      return "Error";
    }
    switch (op) {
      case "+":
        return operand1 + operand2;
      case "-":
        return operand1 - operand2;
      case "*":
        return operand1 * operand2;
      case "/":
        if (operand2 === 0) {
          return "Error";
        }
        return operand1 / operand2;
      default:
        return operand2;
    }
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null && !isNaN(inputValue)) {
      setFirstOperand(inputValue);
      if (nextOperator !== "=") {
        setExpressionHistory(displayValue + " " + nextOperator);
      }
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      if (result === "Error") {
        setDisplayValue("Error");
        setExpressionHistory("");
        setFirstOperand(null);
        setOperator(null);
        setWaitingForSecondOperand(false);
        return;
      }
      setDisplayValue(String(result));
      setFirstOperand(result);

      if (nextOperator === "=") {
        setExpressionHistory(`${firstOperand} ${operator} ${displayValue} =`);
        setOperator(null);
      } else {
        if (expressionHistory.includes("=")) {
          setExpressionHistory(`${result} ${nextOperator}`);
        } else {
          setExpressionHistory(
            `${expressionHistory} ${displayValue} ${nextOperator}`
          );
        }
      }
    }

    setWaitingForSecondOperand(true);
    if (nextOperator !== "=") {
      setOperator(nextOperator);
    }
  };
  const clearDisplay = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
    setExpressionHistory("");
  };

  return (
    <>
      <div className="calculator-display">
        <div className="calculator-history">{expressionHistory}</div>
        <div className="calculator-current-value">{displayValue}</div>
      </div>
      <div className="calculator-buttons">
        <button className="calculator-button function" onClick={clearDisplay}>
          AC
        </button>
        <button className="calculator-button function" onClick={backspace}>
          &#9003;
        </button>
        <button className="calculator-button function" onClick={inputPercent}>
          %
        </button>
        <button
          className="calculator-button operator"
          onClick={() => performOperation("/")}
        >
          &divide;
        </button>

        <button className="calculator-button" onClick={() => inputDigit("7")}>
          7
        </button>
        <button className="calculator-button" onClick={() => inputDigit("8")}>
          8
        </button>
        <button className="calculator-button" onClick={() => inputDigit("9")}>
          9
        </button>
        <button
          className="calculator-button operator"
          onClick={() => performOperation("*")}
        >
          &times;
        </button>

        <button className="calculator-button" onClick={() => inputDigit("4")}>
          4
        </button>
        <button className="calculator-button" onClick={() => inputDigit("5")}>
          5
        </button>
        <button className="calculator-button" onClick={() => inputDigit("6")}>
          6
        </button>
        <button
          className="calculator-button operator"
          onClick={() => performOperation("-")}
        >
          -
        </button>

        <button className="calculator-button" onClick={() => inputDigit("1")}>
          1
        </button>
        <button className="calculator-button" onClick={() => inputDigit("2")}>
          2
        </button>
        <button className="calculator-button" onClick={() => inputDigit("3")}>
          3
        </button>
        <button
          className="calculator-button operator"
          onClick={() => performOperation("+")}
        >
          +
        </button>

        <button className="calculator-button" onClick={inputDecimal}>
          .
        </button>

        <button className="calculator-button" onClick={() => inputDigit("0")}>
          0
        </button>

        <button className="calculator-button function" onClick={toggleSign}>
          +/-
        </button>
        <button
          className="calculator-button operator"
          onClick={() => performOperation("=")}
        >
          =
        </button>
      </div>
    </>
  );
};
