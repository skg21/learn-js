var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers", "jhabbu"]
};

myDog.tails++;

//add new property in object

myDog.name = "moto";

console.log(myDog);

myDog.friends.push("kaliya");
console.log(myDog);

delete myDog.friends;

console.log(myDog);

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}

var obj1 = {
  prop1: "value1"
};

checkObj(obj1, "prop1");
var sum = obj1.prop1;
console.log(sum);


