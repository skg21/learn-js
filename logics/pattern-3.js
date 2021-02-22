/*
*
**
***
****
*****
*/

for (var j = 1; j <= 5; j += 1) {
    for (var i = 1; i <= j; i++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
};
console.log("------------------------------------");

for (var j = 1; j <= 5; j += 1) {
    for (var i = 5; i >= j; i--) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
};
console.log("-----------------------------------------");
for (var j = 1; j >= 5; j++) {
    for (var i = 5; i >= j; i--) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
};
console.log("========================");
for (var j = 1; j <= 5; j++) {
    for (var i = 5; i >= j; i--) {
        process.stdout.write("*");
    };
    process.stdout.write("\n");
};
console.log("===========================================");
console.log("===========================================");


for (var j = 5; j >= 0; j--) {
    for (var i = 1; i <= j; i++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
};





