const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    secondNumber: false,
}

function updateDisplay(){
    document.querySelector('.displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.secondNumber = false;
}

function inputDigit(digit){
    if(calculator.displayNumber == "0"){
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

function inverseNumber(digit){
    if(calculator.displayNumber === "0"){
        calculator.displayNumber -= digit;
    }
}

const buttons = document.querySelectorAll('.button');

for(let button of buttons){
    button.addEventListener('click',function(e){
        const target = e.target;

        if(target.classList.contains('clear')){
            clearCalculator();
            updateDisplay();
            return
        }

        if(target.classList.contains('inverse')){
            inverseNumber(1);
            updateDisplay();
            return
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}

