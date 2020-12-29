// create a array of 10 length [100, 200, 300, 400, 500, ............ 1000]

// read first value


// read last value

// read all values using for loop 100, 200, 300, 400
var arr = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


//read all odd index values 1, 3, 5, 7, 9 [200, 400, 600]

//print all even index value 0, 2, 4, 6, 8, 10

var myArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

for (var i = 1; i < 5; i += 3) {
    console.log(myArray[i]);
} 