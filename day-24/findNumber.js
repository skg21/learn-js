var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 55, 66, 77];

function findNumber() {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                return arr[i];
            }
        }
    }

    return -1;
}

var result = findNumber();

console.log(result);
