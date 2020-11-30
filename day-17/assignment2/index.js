function readName() {
    //1. get input element in js
    var nameElement = document.getElementById("name");
    alert(nameElement.value);

    var div = document.getElementById("nameInfo");
    div.innerHTML = nameElement.value;
}

function readHeading() {
    var h1Elements = document.getElementsByTagName("h1");
    console.log(h1Elements[0].innerText);
}

function readName1() {
    var nameElement = document.getElementById('name1');
    alert(nameElement.value);
}
//-----------------
function readName() {
    var className = document.getElementsByClassName("name");
    alert(className[0].value);

    var div = document.getElementById("id-div");
    div.innerHTML = className[0].value;
}
