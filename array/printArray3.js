var arr = [1, 2, 5, 7, 8];
//even => 2, 8

console.log("------ printing even numbers --------");
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

console.log("---- printing odd numbers -----");
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        console.log(arr[i]);
    }
}
//--even--and --odd --numbers==// 

var arr = [1, 2, 4, 6, 7, 8, , 9, 12];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        console.log(arr[i]);
    }
}
//--------------------------------//
//---------------push-----------//
var qv = [1, 2, 3, 4, 5, 6, 7, 8, 9];
qv.push(10);
console.log(qv);

qv.shift();
console.log(qv);
