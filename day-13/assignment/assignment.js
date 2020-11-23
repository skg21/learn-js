function readBODY() {
    var my = document.getElementsByTagName('p');
    console.log(my.length);
    for (var i = 0; i < my.length; i++) {
        console.log(my[i]);
    }
}

//------------------------
function readDiv() {
    var helo = document.getElementsByClassName('mydiv');
    console.log(helo[0]);
}
//---------------------

function readHTML() {
    readDiv();
    readBODY();
}
//-------------------
