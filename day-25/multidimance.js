var arr = [[1, 2], [3, 4, 100], [5, 6]];

for (var i = 0; i < arr[0].length; i++) {
    console.log(arr[0][i]);
}

for (var i = 0; i < arr[1].length; i++) {
    console.log(arr[1][i]);
}

for (var i = 0; i < arr[2].length; i++) {
    console.log(arr[2][i]);
}



for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

var arr2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10][11, 12, 13, 14, 15]];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr2[i][j]);
    }
}

var arr3 = [[7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]];
for (var i = 0; i < arr3.length; i++) {
    for (var j = 0; j < arr3[i].length; j++) {
        console.log(arr3[i][j]);
    }
}

//-----------------------------------//

//------function =exewte multipte statemeuts,----//