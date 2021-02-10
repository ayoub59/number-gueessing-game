let btn = document.getElementById("btn");
let number = [Math.floor(Math.random() * 100)]
let txtOutput = document.getElementById("outputText");


btn.addEventListener("click", function () {
    let userGs = document.getElementById("userInput").value;

    if (number == userGs) {
        txtOutput.innerHTML = 'your are right the secret number was ' + userGs
    } else if (number > userGs) {
        txtOutput.innerHTML = "your are low"
    } else if (number < userGs) {
        txtOutput.innerHTML = "your are hight"
    }
})