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
//------------------------------part-2-----//
function sonuArr(b) {
    var g = 0;
    for (i = 0; i < b.length; i++) {
        g += b[i];
    }
    return g;
}
var arr2 = [5, 6, 7, 8, 9, 5, 4, 3, 2, 7, 7, 8, 9, 4, 3, 5, 7, 5, 2, 57, 4, 3,];
console.log(sonuArr(arr2));