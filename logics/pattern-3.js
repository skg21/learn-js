/*
*
**
***
****
*****
*/

for (var j = 1; j <= 5; j += 1) {
    for (var i = 1; i <= j; i++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
};
console.log("------------------------------------");

for (var j = 1; j <= 5; j += 1) {
    for (var i = 5; i >= j; i--) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
};
console.log("-----------------------------------------");
for (var j = 1; j >= 5; j++) {
    for (var i = 5; i >= j; i--) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
};
console.log("========================");
for (var j = 1; j <= 5; j++) {
    for (var i = 5; i >= j; i--) {
        process.stdout.write("*");
    };
    process.stdout.write("\n");
};
console.log("===========================================");
console.log("===========================================");


for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        process.stdout.write(" ");
    }
    for (var k = 1; k <= i; k++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
};

console.log("--------------------------")
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 6 - i; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
};
console.log("________-----------------------------------------");
var myAarr = [];
for (var i = 1; i <= 9; i++) {
    if (i % 2 != 0) {
        myAarr.push(i);
    }
};
console.log(myAarr);
console.log("----------------------------------");
var product = 1;

var arr = [[1, 2], [3, 4], [5, 6], [7, 8]];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
    }
};
console.log(product);
console.log("------------------------------------------");
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var tatal = 0;
for (var i = 0; i < arr1.length; i++) {
    tatal += arr1[i];
};
console.log(tatal);










