function getHistory() {
    var creatDiv = document.getElementById("box");

    var containerdiv = document.createElement("div");
    containerdiv.setAttribute("id", "container");

    var calculatorDiv = document.createElement("div");
    calculatorDiv.setAttribute("class", "calculator");

    var resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "result");

    var historyDiv = document.createElement("div");
    historyDiv.setAttribute("class", "history");

    var historyValueDiv = document.createElement("div");
    historyValueDiv.setAttribute("id", "history-value");

    var outputDiv = document.createElement("div");
    outputDiv.setAttribute("class", "output");

    var outputVal = document.createElement("div");
    outputVal.setAttribute("class", "output-value");

    var keyboardDiv = document.createElement("div");
    keyboardDiv.setAttribute("class", "keyboard");

    var button = document.createElement("button");
    button.setAttribute("class", "operator");
    button.setAttribute("id", "clear");
    button.innerText = "C";

    creatDiv.appendChild(containerdiv);
    containerdiv.appendChild(calculatorDiv);
    calculatorDiv.appendChild(resultDiv);
    resultDiv.appendChild(historyDiv);
    historyDiv.appendChild(historyValueDiv);
    resultDiv.appendChild(outputDiv);
    outputDiv.appendChild(outputVal);
    calculatorDiv.appendChild(keyboardDiv);
    keyboardDiv.appendChild(button);






};

