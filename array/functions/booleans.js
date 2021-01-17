function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

console.log(test(true));  // returns "It was true"


console.log("3" == 3);

function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

var result = testEqual(12);

console.log(result);

//camprison operator 
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);


//logical and operator
// && and
// || or
function testLogicalAnd(val) {
    // Only change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

testLogicalAnd(10);
//--------------------------------//

function myVar(val) {
    if (val > 40) {
        return "it was ture";
    }
    return "it was false";
}
var result = myVar(30);
console.log(result);
//-------------------------------//

function myCondition(sum) {
    if (sum < 50) {
        return "it was ture";
    }
    return "it was false";
}
var result = myCondition(40);
console.log(result);
//-------------------------//