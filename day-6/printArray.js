var values = [10, 20, 30, 40, 50, 60];


for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}
var sum = 0;
sum += values[0]; //10
sum += values[1]; //30
sum += values[2]; //60
sum += values[3]; //100
sum += values[4];//150
sum += values[5];// 210

console.log("sum = ", sum);

