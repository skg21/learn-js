//function declaration
function hello() {
    console.log("Hello World");
}

//function call
hello();


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

    for(var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log(sum);
}

    ();