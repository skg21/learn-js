const person = {
    name: "karan"
}

Object.freeze(person);

person.name = "rajesh";

console.log(person);
const print = (name) => { console.log(name); }
//const print = name => console.log(name);

function printName(name = "Anonymous") {
    console.log(name);
}

printName("karan");

