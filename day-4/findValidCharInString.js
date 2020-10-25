var message = "Hello good morning all!";

console.log("string length is : ", message.length);

var messageLength = message.length;

var n = 23;

if(n <= messageLength) {
    console.log("found charator or given index:", message[n-1]);
} else {
    console.log("error! because string is sorter then given index");
}