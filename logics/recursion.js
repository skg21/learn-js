function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0
    }
    return sum(arr, n - 1) + arr[n - 1]
    // Only change code above this line
}

var s = sum([10, 20, 30, 40, 50], 4);

console.log(s);

function karan(arr, n) {
    if (n <= 0) {
        return 0;
    }
    return karan(arr, n - 1) + arr[n - 1]
}
var sonu = karan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
console.log(sonu);

function logics(arr2, n) {
    if (n <= 0) {
        return 0;
    }
    return logics(arr2, n - 1) + arr2[n - 1];
}
var sum = logics([100, 200, 300, 400, 500], 3);
console.log(sum);

function skg(arr3, n) {
    if (n <= 0) {
        return 0;
    }
    return skg(arr3, n - 1) + arr3[n - 1];
};
var result = skg([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);

console.log(result);




