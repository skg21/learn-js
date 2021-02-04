function loginForm() {
    CreatLoginForm();
}

function CreatLoginForm() {
    var mainDiv = document.getElementById("main-div");

    var loginDiv = document.createElement("loginDiv");
    loginDiv.setAttribute("class", "loginDiv");


    mainDiv.appendChild(loginDiv);



}