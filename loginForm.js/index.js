function loginForm() {
    CreatLoginForm();
}

function CreatLoginForm() {
    var mainDiv = document.getElementById("main-div");

    var loginDiv = document.createElement("div");
    loginDiv.setAttribute("class", "loginDiv");

    var form = document.createElement("form");

    var h1 = document.createElement("h1");
    h1.innerText = "Login Form";

    var creatInput = document.createElement("input");
    creatInput.setAttribute("type", "text");
    creatInput.setAttribute("class", "input-field");
    creatInput.setAttribute("placeholder", "User Id");

    var password = document.createElement("input");
    password.setAttribute("type", "text");
    password.setAttribute("class", "input-field");
    password.setAttribute("placeholder", "password");

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "chck-box");

    var span = document.createElement("span");
    span.innerText = "Reamainder";

    var button = document.createElement("button");
    button.setAttribute("class", "submit");
    button.innerText = "Log in";

    mainDiv.appendChild(loginDiv);
    loginDiv.appendChild(form);
    form.appendChild(h1);
    form.appendChild(creatInput);
    form.appendChild(password);
    form.appendChild(checkbox);
    form.appendChild(span);
    form.appendChild(button);



}