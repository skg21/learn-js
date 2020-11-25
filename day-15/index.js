function appendDiv1() {
    var p = document.createElement('p');
    p.innerHTML = "this is my paragraph!";
    //<p>this is my paragraph!</p>

    var div = document.getElementById("div1");
    div.appendChild(p);

    var p = document.createElement('p');
    p.innerHTML = "thi is my 3rd paragraph!";
    var div3 = document.getElementById('div3');
    div3.appendChild(p);
}

function appendDiv2() {
    var p = document.createElement('p');
    p.innerHTML = "this is my second paragraph!";

    var div2 = document.getElementById('div2');
    div2.appendChild(p);
}