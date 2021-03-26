let obj1 = {};
let obj2 = { name: "karan" };
let obj3 = new Object();

let obj4 = Object.create(obj2);

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

let person = {
    fname: "karan",
    lname: "singh",
    age: 29,
    printFullName: function () {
        console.log(this.fname, " ", this.lname);
    },
    changeFirstName: function (newName) {
        this.fname = newName;
    },

    printAge: function () {
        console.log(this.age);
    },
    ChangeAge: function (newAge) {
        this.age = newAge;
    }
};

console.log(person.fname);

person.changeFirstName("sonu");

console.log(person.fname);

person.ChangeAge("32");
person.printAge();


//========================================
let stack = {
    arr: [],

    print: function () {
        console.log(...this.arr);
    },

    push: function (newVal) {
        this.arr.push(newVal);
    },
    pop: function () {
        this.arr.pop();
    }
};
console.log(stack.arr);
stack.push(1);
stack.push(1);
stack.push(1);
stack.push(1);
stack.print();
stack.pop();
stack.pop();
stack.print();
//stack.shift(); 

let local = {
    arr: [],

    reed: function () {
        console.log(...this.arr);
    },
    push: function (newVal) {
        this.arr.push(newVal);
    },
    pop: function () {
        this.arr.pop();
    }
};
local.push(1);
local.push(2);
local.push(3);
local.push(4);
local.push(5);
console.log(local.arr);
local.pop();










