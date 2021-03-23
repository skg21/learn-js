var sum = (...nums) => {
    var s = 0; 
    for(let i = 0; i < nums.length; i++) {
        s += nums[i];
    }
    return s;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 9, 10, 14, 1];
var result = sum(...arr5); //sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 1);
console.log(result);