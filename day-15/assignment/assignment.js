function createDiv() {
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", "newDiv");
    //<div id="newDiv"></div>
    newDiv.innerHTML = "100 * 100";
    //<p>this is my paragraph!</p>

    var div = document.getElementsByClassName("left-div");
    //[left-div]
    div[0].appendChild(newDiv);
}

function createDiv2() {
    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute("id", "newDiv2");

    newDiv2.innerHTML = "100*100";

    var div2 = document.getElementsByClassName("right-div");
    div2[0].appendChild(newDiv2);
}