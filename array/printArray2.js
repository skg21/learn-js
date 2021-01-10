var arr1 = [[1, 2], [3, 4], [5, 6], [7,8], [9, 10]];

// print array as 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
for(var i = 0; i < arr1.length; i++) {
	console.log(arr1[i][0]);
	console.log(arr1[i][1]);
}

// print using inner for loop
//
for(var i = 0; i <  arr1.length; i++) {
	for(var j = 0; j < arr1[i].length; j++) {
		console.log(arr1[i][j]);
	}
}

//print array as 2,1, 4,3, 6,5, 8,7, 10,9

