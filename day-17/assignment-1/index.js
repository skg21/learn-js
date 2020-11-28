function printAddress() {
    //1. get the values of form elements
    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var gender = document.getElementById("gender");

    //2, create new p element and append the text with form value
    var p = document.createElement('p');
    p.innerHTML = "Name: " + name.value + "<br>" +
        "Address: " + address.value + "<br>" +
        "Gender: " + gender.value;

    //3. get right div element 
    var rightDivs = document.getElementsByClassName("right-div");
    console.log(rightDivs);
    var rightdiv = rightDivs[0];

    //3. append new p element to right div
    rightdiv.appendChild(p);

}