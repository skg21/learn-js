function Person(name, age) {
	this.name = name;
	this.age = age;
}

var person1 = new Person("karan", 29);
var person2 = new Person("karan", 20);
var person3= new Person("karan", 29);
var person4 = new Person("karan", 20);


function Teacher(name, age, schoolname, address) {
	this.name = name;
	this.age = age;
	this.schoolname = schoolname;
	this.address = address;
}

var teacher1 = new Teacher("hukamchand", 50, "primary school", "gurgachka");
var teacher2 = new Teacher("pyarelaal", 53, "primary school", "saranvas");


var teacher3 = `
{
	"name": "hukamchand"
}
`;

var t3Object = JSON.parse(teacher3);

console.log(typeof teacher3);
console.log(typeof t3Object);

var t1String = JSON.stringify(teacher1);
console.log("typeof teacher1: ", typeof teacher1);
console.log(teacher1);
console.log("typeof t1String: ", typeof t1String);
console.log(t1String);

