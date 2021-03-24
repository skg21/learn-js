//let.....................//

if (true) {
    let k = 5;
    console.log("local: ", k);
}
console.log("global: ", k);

//const...................//

if (true) {
    const l = 10;
    console.log("local", l);
}
/*
const arr = [1, 2, 3, 4, 5];
for (const i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

//


var hello = function () {
    console.log("hello");
} 
*/

hello();


//   arr of unshift.......//

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

arr = [...arr1, ...arr2, ...arr3];
console.log(arr);