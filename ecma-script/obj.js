let person = [
    {
        name: "karan",
        job: "SE",
        age: 29,
        interest: ["vollyboll, coding, cooking"]
    },
    {
        name: "rejesh",
        job: "IR",
        age: 27,
        interst: ["cricket"]
    },
    {
        name: "sonu",
        job: "NE",
        age: 25,
        interest: ["social media"]
    },

];

let s = 25;
for (let i = 0; i < person.length; i++) {
    if (person[i].age < s) {
        console.log(person[i].name);
    }

};


const local = [{
    name: "kamal",
    age: 23
},
{
    name: "vikarm",
    age: 34,

},
{
    name: "rohit",
    age: 30,
}
];

const A = 23;
for (const i = 0; i < local.length; i++) {
    if (local[i].age > A) {
        console.log(local[i].age);
    }
};



