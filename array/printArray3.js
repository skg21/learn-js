var arr = [1, 2, 5, 7, 8];
//even => 2, 8

console.log("------ printing even numbers --------");
for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

console.log("---- printing odd numbers -----");
for(var i = 0; i < arr.length; i++) {
    if(arr[i]%2 != 0) {
        console.log(arr[i]);
    }
}