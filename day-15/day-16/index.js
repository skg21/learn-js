function creatDiv1() {
    var newDiv = document.createElement('div');
    newDiv.setAttribute("id", "newDiv");
    newDiv.innerHTML = "my div";
    var div = document.getElementsByClassName("left-div");
    div[0].appendChild(newDiv);
}
function creatDiv2() {
    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute("id", "newDiv2");
    newDiv2.innerHTML = "my second div";
    var div = document.getElementsByClassName('right-div');
    div[0].appendChild(newDiv2);

}