var dogs = {
    fido: "mutt",
    Hunter: "Doberman",
    snoopie: "Beagle"
}
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);

//---------------------------------//

var someObj = {
    propName: "John"
};

var someProp = propPrefix("Name"); //"propName"
someObj[someProp];

function propPrefix(str) {
    return "prop" + str;
}

//=============================//

var sumObj = {
    Name: "sonu"
};

var objName = objFunction(val);
objName[Name];

function objFunction(val) {
    return "gujjar" + val;
}
