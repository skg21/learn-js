var num = 30;
function test(num) {
    if (num > 20) {
        return "num is bigges then;"
    }
    return "num is less then 20";
}
var result = test();
console.log(result);

var a = 5;
var b = 7;
var c = 8;

if (a > b) {
    console.log("a");
} else {
    console.log("c");
}
{
    if (b > c) {
        console.log("c");
    }
}