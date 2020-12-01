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

console.log("----------------------------------------------------")

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
console.log("color :", bus.color);
console.log("gear :", bus.gear);

console.log("--------------------------------------------------");

var bike = {
    name: "splenderPlesh",
    model: "2020",
    gear: "4",
    color: "black",
    wheels: "2",
    engine: {
        cc: "97.7",
        fuleType: "petrol",

    }
};
console.log("bike name :", bike.name);
console.log(" model :", bike.model);
console.log("gear :", bike.gear);
console.log("color :", bike.color);
console.log("wheels :", bike.wheels);
console.log("engine :", bike.engine.cc);
console.log("engine fuleType :", bike.engine.fuleType);