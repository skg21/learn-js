var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers", "jhabbu"]
  };

myDog.tails = 0;

//add new property in object

myDog.bark = "woo wooh";

console.log(myDog);

delete myDog.bark;

console.log(myDog);


delete myDog.tails;
console.log(myDog);

//-------------------------------//
var lookup = {
    alpha: "Adams",
    charlie: "chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }
  
   var obj = lookup;
   console.log(obj);



 