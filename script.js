function check() {
    let inputValue = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (inputValue === "") {
        result.textContent = ("Please enter a number!")
        return;
    };

    let number = parseFloat(inputValue);

    if (!Number.isInteger(number)) {
        result.textContent = "Please enter an integer (no decimal values).";
        return;
    }

    else if (number % 2 === 0) {
        result.textContent = (`${number} is an EVEN number.`)
    }

    else {
        result.textContent = (`${number} is an ODD number.`)
    }

};