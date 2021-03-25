const user = {
    name: "karan",
    age: 29
};

//const name = user.name;
//const age = user.age;
const { name, age } = user;
console.log(name, age);


//this will not work

const userName = {
    name: "kamal Singh",
    age: "26 Years"

}
const reed = userName.name;
console.log(reed);

const companyName = {
    name: "acer",
    age: 26

}
const { name, age } = companyName;
console.log(name, age);




