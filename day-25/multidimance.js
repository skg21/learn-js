var num = 30;
function test(num) {
    if (num > 20) {
        return "num is bigges then;"
    }
    return "num is less then 20";
}
var result = test();
console.log(result);

var val = 50;
function bigges(val) {
    if (val > 40) {
        return " val is bigges then";
    } else {
        return "val is less then;"
    }
}
var result = bigges();
console.log(result);

var a = 5;
var b = 7;
var c = 8;

if (a > b) {
    if (a > c) {
        console.log("a");
    } else {
        console.log("c");
    }
} else {
    if (b > c) {
        console.log("b");
    } else {
        console.log("c");
    }
}

