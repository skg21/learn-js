var arr = [10, 20, 30, 40, 50];

function reverseArray(arr) {
    var newArr = [];
    var j = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        newArr[j] = arr[i];
        j++;
    }
    return newArr
}

//-------------------------------------//

var arr2 = [100, 200, 300, 400];

function reverseArray2(arr2) {
    var newArr = [];
    var j = 0;
    for (var i = arr2.length - 1; i >= 0; i--) {

        newArr[j] = arr2[i];
        j++;
    }

    return newArr
}
var result = reverseArray2(arr2);
console.log();
//------------------------------------------------//

var arr3 = [500, 400, 300, 200, 100];

function reverseArray3(arr3) {
    var newArr = [];
    var j = 0;
    for (var i = arr3.length - 1; i >= 0; i--) {
        newArr[j] = arr3[i];
        j++;
    }
    console.log(newArr);
    return newArr
}
var result = reverseArray3(arr3);
console.log(result);

