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
    var creatBtn = document.createElement("button");
    creatBtn.setAttribute("class", "operator");
    creatBtn.setAttribute("id", "backspace");
    creatBtn.innerText = "CE";

    var creatBtn1 = document.createElement("button");
    creatBtn1.setAttribute("class", "operator");
    creatBtn1.setAttribute("id", "%");
    creatBtn1.innerText = "%";
    var creatBtn2 = document.createElement("button");
    creatBtn2.setAttribute("class", "operator");
    creatBtn2.setAttribute("id", "/");
    creatBtn2.innerText = "&#247;";

    var creatBtn3 = document.createElement("button");
    creatBtn3.setAttribute("class", "operator");
    creatBtn3.setAttribute("id", "7");
    creatBtn3.innerText = "7";

    creatDiv.appendChild(containerdiv);
    containerdiv.appendChild(calculatorDiv);
    calculatorDiv.appendChild(resultDiv);
    resultDiv.appendChild(historyDiv);
    historyDiv.appendChild(historyValueDiv);
    resultDiv.appendChild(outputDiv);
    outputDiv.appendChild(outputVal);
    calculatorDiv.appendChild(keyboardDiv);
    keyboardDiv.appendChild(button);
    keyboardDiv.appendChild(creatBtn1);
    keyboardDiv.appendChild(creatBtn2);
    keyboardDiv.appendChild(creatBtn3);






};

