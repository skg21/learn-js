//function declaration
function hello() {
    console.log("Hello World");
}

//function call
hello();

function sonu() {
    console.log("my name is sonu gujjar");
}
sonu();


// ------------------ below example for variable --------------------------
//variable declaration
var a;
//variable assigment
a = 10;
//variable access/call
console.log(a);

// ------------------ function sum -----------------------------
function sumFunction() {
    var numbers = [1, 2, 3, 4, 5];

    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(sum);
}
// value ...
var a;
a = 100;
console.log(a);

var b;
b = 300;
console.log(b);

var c;
c = 40;
console.log(c);

if (a > b) {
    if( a > c) {
        console.log("a is bigger");
    } else {
        console.log("c is bigger");
    }
}
else {
   if(b > c) {
       console.log("b is bigger")
   } else {
       console.log("c is bigger");
   }
}


function firstfuncation() {
    console.log("my name is sonu gujjar");
}
firstfuncation();

