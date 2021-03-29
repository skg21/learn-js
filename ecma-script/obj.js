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
        console.log(person[i].interst);
    }

};

for (let i = 0; i < person.length; i++) {
    if (person[i] > s) {
        console.log(person[i].interst("cricket"));
    }
};










