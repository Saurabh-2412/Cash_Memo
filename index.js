const billAmount = document.querySelector('#billAmt');
const givenAmount = document.querySelector('#givenAmount');
const submit = document.querySelector("#btn");
const result = document.querySelector("#result");
const insert = document.querySelector('#toBe');
const resultContainer = document.querySelector('#result-container');

function calculate(bal){
    const denominations = [2000, 500, 100, 50, 10, 5, 2, 1];
    var resultString = "";
    var minNotes = new Map();
    var contains = 0;
    for(var i = 0; i < denominations.length ; i++){
        if(bal > 0) {
            contains = Math.floor(bal/denominations[i])
            minNotes.set(denominations[i], contains);
            bal = bal - (denominations[i]*contains);
        }
    }
    minNotes.forEach((noteFreq, noteType)=> {
        resultContainer.style.display = 'block';
        resultString += `${noteFreq} number of ${noteType}\n`;
    })
    console.log(resultString);
    result.innerText = resultString;
}

submit.addEventListener("click", () => {
    if(billAmount.value == "" || givenAmount.value == "") {
        alert("Please enter valid inputs");
    }
    else {
        var balance = givenAmount.value - billAmount.value;
        if(balance < 0) {
            alert("Ask your customer to pay full amount!");
        }
        calculate(balance);
    }
});