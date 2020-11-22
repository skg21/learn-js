function sumArr(a) {
    var s = 0;

    for (var i = 0; i < a.length; i++) {
        s += a[i];
    }

    return s;
}

var arr1 = [1, 2, 3, 4, 5];

console.log(sumArr(arr1));

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArr(arr2));
//----------------------------------
function apple(arr) {
    var value = 0;
    for (var i = 0; i < arr.length; i++) {
        value += arr[i];
    }
    return value;
}
var arr2 = [20, 30, 40, 50, 60, 70];
console.log(apple(arr2));
//--------
