function appendValue(val) {
    document.calc.display.value += val;
}

function clearDisplay() {
    document.calc.display.value = '';
}

function deleteLast() {
    let currentValue = document.calc.display.value;
    document.calc.display.value = currentValue.slice(0, -1);
}

function calculate() {
    try {
        document.calc.display.value = eval(document.calc.display.value);
    } catch {
        document.calc.display.value = 'Error';
    }
}