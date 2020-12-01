function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}


var person2 = new Person("karan", 29, "vill-beraheri");

var person3 = new Person("sanjay", 55, "vill-beraheri");

var person1 = {
    name: "karan",
    age: 29,
    address: "vill-beraheri"
};

console.log(person1.name);

console.log(person2);
console.log(person3.name);


function Teacher(name, age, schoolName) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
}

var teacher1 = new Teacher("hukamchand", 55, "primary school beraheri");
var teacher2 = new Teacher("pyarelaal", 55, "primary school");
console.log(teacher2);
//-----------------------------------------------

function sutdents(name, age, schoolName) {
    this.name = name;
    this.age = age;
    this.schoolName = schoolName;
}

var sutdents1 = new sutdents("rajeev", 34, "govt school alwar");
var sutdents2 = new sutdents("sanjay kumar", 19, "src school kharathal");
console.log(sutdents1, sutdents2);