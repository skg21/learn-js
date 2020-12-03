var indiaCricketTeam = `{
    "coach": "ravisastri",
    "curreatTour" :"ind.vs Aus",
    "NextTour": "ind. vs jmb.",
    "teamMembers":["virat Kohli","kl Rahul","Dhawan", "rohit sharma", "Hardik panday",
    "jasprit Bumrah","kuldeep yaday","yazvendra chahal"],

    "captain" : "virat Kohli",

    "Bowlers" : ["bumrah", "shami", "natrajan", "kuldeep","jasprit","yazvendra"],
    "Batsman" : ["Dhawan","kl rahul","virat Kohli","rohit Sharma"]
}`;
var obj = JSON.parse(indiaCricketTeam);
console.log(typeof indiaCricketTeam);
console.log(typeof obj);
console.log(obj.coach);

var str = JSON.stringify(obj);

console.log(typeof str);
