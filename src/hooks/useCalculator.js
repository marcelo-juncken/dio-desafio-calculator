import {useState} from "react";
import {performOperation} from "../services/calculatorService";

const initialCalcState = {
    displayValue: "0",
    operation: null,
    isLastButtonOperation: false,
    totalValue: "",
    lastNumber: null,
    lastOperation: null,
}

export function useCalculator() {

    const [calcState, setCalcState] = useState(initialCalcState)

    const handleAddDot = () => {
        setCalcState(prevValue => {
            let {displayValue, isLastButtonOperation} = prevValue;

            if (displayValue.includes('.') && !isLastButtonOperation) return prevValue

            return {
                ...prevValue,
                displayValue: isLastButtonOperation ? "0." : displayValue + ".",
                isLastButtonOperation: false
            }
        })
    };

    const handleResetCalculator = () => setCalcState(initialCalcState)

    const handleSimpleOperation = (newOperation) => {
        setCalcState((prevValue) => {
            let {totalValue, displayValue, isLastButtonOperation} = prevValue;

            const isChangingOperation = isLastButtonOperation && prevValue.operation
            if (isChangingOperation) {
                return {
                    ...prevValue,
                    operation: newOperation,
                    totalValue: `${parseFloat(totalValue)} ${newOperation}`,
                };
            }

            const result = prevValue.operation ? performOperation(prevValue.lastNumber, displayValue, prevValue.operation) : parseFloat(displayValue);

            return {
                ...prevValue,
                isLastButtonOperation: true,
                totalValue: `${result} ${newOperation}`,
                displayValue: `${result}`,
                lastNumber: result,
                lastOperation: prevValue.operation,
                operation: newOperation,

            };
        });
    };


    const handleEqualOperation = () => {
        setCalcState(prevValue => {
            const {displayValue, lastNumber, operation, lastOperation} = prevValue;

            const noSimpleOperationWasPressed = !operation && !lastOperation
            if (noSimpleOperationWasPressed) {
                return {...prevValue, totalValue: `${displayValue} =`, isLastButtonOperation: true};
            }

            const result = performOperation(operation ? lastNumber : parseFloat(displayValue), operation ? displayValue : String(lastNumber), operation || lastOperation);

            return {
                ...prevValue,
                totalValue: `${operation ? lastNumber : displayValue} ${operation ?? lastOperation} ${operation ? displayValue : lastNumber} =`,
                displayValue: `${result}`,
                lastNumber: operation ? parseFloat(displayValue) : lastNumber,
                lastOperation: operation || lastOperation,
                operation: null,
                isLastButtonOperation: true
            };

        });
    };


    const handleSquare = () => {
        setCalcState((prevValue) => {
            const newValue = Math.pow(parseFloat(prevValue.displayValue), 2);
            return {...prevValue, displayValue: newValue.toString()};
        })
    }

    const handleSquareRoot = () => {
        setCalcState((prevValue) => {
            const newValue = Math.sqrt(parseFloat(prevValue.displayValue));
            return {...prevValue, displayValue: newValue.toString()};
        })
    }

    const handleToggleSign = () => {
        setCalcState((prevValue) => {
            const newValue = -parseFloat(prevValue.displayValue);
            return {...prevValue, displayValue: newValue.toString()};
        })
    }

    const handleAddNumber = (number) => {
        setCalcState(prevValue => {
            if (prevValue.isLastButtonOperation) {
                return {
                    ...prevValue,
                    displayValue: number,
                    isLastButtonOperation: false,
                }
            }

            const newValue = prevValue.displayValue === "0" ? number : `${prevValue.displayValue}${number}`;
            return {
                ...prevValue,
                displayValue: newValue
            }
        })
    }

    return {
        calcState,
        handleAddDot,
        handleSimpleOperation,
        handleEqualOperation,
        handleSquare,
        handleSquareRoot,
        handleToggleSign,
        handleAddNumber,
        handleResetCalculator
    };
}
