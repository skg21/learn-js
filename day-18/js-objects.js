var obj1 = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
};

console.log(obj1);

var obj2 = {
    "key1": 123,
    "key2": true,
    "key3": "karan singh"
};

//[1, 2, 3, 4]
//[{}, {}, {}]
var dogs = [{
    name: "jhabbu",
    color: "gray dark",
    bread: "desi",
    gender: "male"
},
{
    name: "tom",
    color: "black",
    bread: "english bread",
    gender: "male"
},
{
    name: "ganga",
    color: "light red",
    bread: "desi",
    gender: "female"
}
];

for (var i = 0; i < dogs.length; i++) {
    console.log("---------------");
    console.log("dog", i + 1, "details : ");
    console.log("----------------------")
    console.log("Name: ", dogs[i].name);
    console.log("Color: ", dogs[i].color);
    console.log("bread: ", dogs[i].bread);
    console.log("Gender: ", dogs[i].gender);
}
//--------------------- ----------------------------//
//----home-work--//
var obj1 = {
    name: "karan",
}
console.log("name :", obj1.name);

console.log("----------careat a teacher object------------");

var obj2 = {
    name: "karan",
    age: "29",
    subject: "computer",
    schoolName: "primary school,beraheri"
}
console.log("name :", obj2.name);
console.log("age :", obj2.age);
console.log("subject :", obj2.subject);
console.log("schoolName :", obj2.schoolName);

console.log("-----create arry of teachers---------");

var teachers = [{
    name: "karan",
    age: "30",
    subject: "computer",
    schoolName: "govt school , gurgchaka"
},

{
    name: "rajesh",
    age: "26",
    subject: "Math",
    schoolName: "govt school , alwar"
},
{
    name: "sanjay kumar",
    age: "25",
    subject: "english",
    schoolName: "primary school kharital"
},
{
    name: "rajeev",
    age: "45",
    subject: "english",
    schoolName: "govt school , bearheri"
},
{
    name: "kamal",
    age: "40",
    subject: "computer",
    schoolName: "primary school alwar"
}];

for (var i = 0; i < teachers.length; i++) {
    console.log("---------------------------");
    console.log("tearcher", i + 1, "details : ");
    console.log("-------------------------------");
    console.log("name :", teachers[i].name);
    console.log("name :", teachers[i].age);
    console.log("name :", teachers[i].subject);
    console.log("name :", teachers[i].schoolName);
}

