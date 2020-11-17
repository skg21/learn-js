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
//------
function my(b) {
    var p = 0;
    for (i = 0; i < b.length; i++) {
        p += b[i];
    }
    return p;
}
var arr3 = [4, 4, 5, 6, 7, 8, 9, 4];
var result = my(arr3);
console.log(result);
//----------------------
function sonu(a) {
    var h = 0;
    for (i = 0; i > a.length; i++) {
        h += a[i];
    }
    return h;
}
var arr4 = [4, 8, 9, 7, 6, 5, 3, 21,];
var result = a(arr4);
console.log(result);