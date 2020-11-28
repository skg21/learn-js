function creatDiv1() {
    var newDiv = document.createElement('div');
    newDiv.setAttribute("class", "newDiv");
    newDiv.innerHTML = "my div";
    var div = document.getElementsByClassName("left-div");
    div[0].appendChild(newDiv);
}
function creatDiv2() {
    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute("class", "newDiv2");
    newDiv2.innerHTML = "my second div";
    var div = document.getElementsByClassName('right-div');
    div[0].appendChild(newDiv2);
}

function changeDivColor() {
    var newDivs = document.getElementsByClassName('newDiv');
    for (var i = 0; i < newDivs.length; i++) {
        newDivs[i].classList.add('newColor');
    }
}

function removeDivColor() {
    var newDivs = document.getElementsByClassName('newDiv');
    for (var i = 0; i < newDivs.length; i++) {
        newDivs[i].classList.remove('newColor');
    }
}