var car = {
    name: "maruti",
    model: "2020",
    wheels: 4,
    gear: 5,
    color: "mehroon",
    engine: {
        indectionType: "fuel",
        enginePower: "83bhp",
        fuleType: "petrol",
        boostEngine: {
            fuleType: "battry",
            enginePower: "5bhp"
        }
    }
};

console.log("Car Name: ", car.name);
console.log("engine fuletype", car.engine.fuleType);
console.log("enginePower", car.engine.boostEngine.enginePower);
//------------------------------------------------------------------------//

var bus = {
    name: "mahindra ",
    model: "2018",
    wheels: "6",
    gear: "5",
    color: "pink",
    engine: {
        cc: "5660",
        cylinder: "6",
        fuleType: "dejal",
    }
};
console.log("bus name :", bus.name);
console.log("engine cc :", bus.engine.cc);
console.log("engine cylinder:", bus.engine.cylinder);
