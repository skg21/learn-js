function test() {
    var loc = "foo";
    console.log(loc);
}

test();

//console.log(loc);

console.log("------------- local vs global --------------");

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";


    // Only change code above this line
    return outerWear;
}

var result = myOutfit();

console.log(result);
//------------------------------------------------------------------//

var city = "rajasthan";
function details() {
    //  var city = "alwar";

    return city;
}
var result = details();
console.log(result);

//------------------------------//

var members = "boy"
function popule() {
    var members = "giral";

    return members;
}

var result = popule();
console.log(result);