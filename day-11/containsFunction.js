//[10, 20, 30 , 40 , 50]
// 30  
function contains(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        console.log("checking ", arr[i], " = ", num, "  ", arr[i] == num);
        if (arr[i] == num) {
            return true;
        }
    }

    return false
}

var arr = [10, 20, 30, 40, 50];
var givenNumber = 100;

var result = contains(arr, givenNumber);

console.log(result);

//---------------------
function myname(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        console.log("checking", arr[i], " = ", arr[i] == num);
        if (arr[i] == num) {
            return true;
        }
    }
    return false;

}
var arr = [40, 70, 90, 50, 30, 10];
var num = 90;
var result = myname(arr, num);
console.log(result);
//-------------
function karansingh(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        console.log("checking", arr[i], " = ", arr[i] == num);
        if (arr[i] == num) {
            return true;

        }
    }
    return false;
}
var arr = [40, 50, 60, 70, 80, 90, 100];
num = 80;
var result = karansingh(arr, num);
console.log(result);

//---------


function doubleArrElement(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

var arr2 = [100, 20, 60, 4, 5];
var result = doubleArrElement(arr2);
console.log(result);

//-----------------
function skg(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;

}
var arr3 = [20, 40, 50,];
var result = skg(arr3);
console.log(result);
//--------------------------------------//
function myname(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}
var arr4 = [400, 500, 600];
var result = myname(arr4);
console.log(result);
//--------------------------//

function sonu(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i];
    }
    return arr;
}
var arr5 = [30, 40, 60];
var result = sonu(arr5);
console.log(result);

