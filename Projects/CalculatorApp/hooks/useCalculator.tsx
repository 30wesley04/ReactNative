import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '÷'
}

export const useCalculator = () => {
    const [formula, setFormula] = useState('0');
    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0')
    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0);
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        } else {
            setFormula(number)
        }
    }, [number])


    useEffect(() => {
        const subResult = calculateSubResult();
        //Calcular resultado
        setPrevNumber(`${subResult}`)
    }, [formula])

    const clean = () => {
        setNumber('0');
        setPrevNumber('0');
        setFormula('0');
        lastOperation.current = undefined
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }

        setNumber('-' + number)
    }

    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = number;
        if (number.includes('-')) {
            currentSign = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1))
        }

        setNumber('0')
    }

    const setLastNumber = () => {

        calculateResult();
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        }

        setPrevNumber(number)
        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.divide
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.multiply
    }

    const substractOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.substract
    }

    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operator.add
    }

    const calculateSubResult = () => {
        const [firstValue, operator, secondValue] = formula.split(' ');
        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if (isNaN(num2)) return num1;

        switch (operator) {
            case Operator.add:
                return num1 + num2;

            case Operator.multiply:
                return num1 * num2;

            case Operator.divide:
                return num1 / num2;

            case Operator.substract:
                return num1 - num2;

            default:
                throw new Error(`Operation ${operator} not implemented`)

        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);
        lastOperation.current = undefined
        setPrevNumber('0')

    }

    const buildNumber = (numberString: string) => {
        if (number.includes('.') && numberString === '.') return
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString == '.') {
                return setNumber(number + numberString)
            }

            //otro cero yu no hay punto
            if (numberString == '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString)
            }

            if (numberString == '0' && !number.includes('.')) {
                return;
            }
        }

        setNumber(number + numberString)
    }

    return {
        formula,
        number,
        prevNumber,
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        multiplyOperation,
        substractOperation,
        addOperation,
        calculateSubResult,
        calculateResult
    }
}