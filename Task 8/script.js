/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator {

    sum(numX, numY) {
        return numX + numY
    };
    substraction(numX, numY) {
        return numX - numY
    };
    multiplication(numX, numY) {
        return numX * numY
    }
    division(numX, numY) {
        return numX / numY
    }
}

const calculator = new Calculator();

const calculatorSumExample = calculator.sum(4, 6);
const calculatorSubstractExample = calculator.substraction(10, 7);
const calculatorMultiplExample = calculator.multiplication(2, 5);
const calculatorDivisionExample = calculator.division(6, 2);
console.log(calculatorSumExample);
console.log(calculatorSubstractExample);
console.log(calculatorMultiplExample);
console.log(calculatorDivisionExample);
