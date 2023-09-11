let input = "";

function appendNumber(number) {
    input += number;
    updateDisplay();
}

function appendOperator(operator) {
    input += " " + operator + " ";
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(input);
        input = result;
        updateDisplay();
    } catch (error) {
        input = "Error";
        updateDisplay();
    }
}

function clearInput() {
    input = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("result").value = input;
}

