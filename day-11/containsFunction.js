//[10, 20, 30 , 40 , 50]
// 30
function contains(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        console.log("checking ", arr[i], " = ", num, "  ", arr[i] == num);
        if (arr[i] == num) {
            return true;
        }
    }

    return false
}

var arr = [10, 20, 30, 40, 50];
var givenNumber = 100;

var result = contains(arr, givenNumber);

console.log(result);

