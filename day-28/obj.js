/*var shoes = [
  {
    brand: "nike",
    price: 4000,
  },
  {
    brand: "campus",
    price: 1500,
  }, {
    brand: "addidas",
    price: 3000
  }

];

function readProp(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return obj[prop];
  } else {
    return "Not found";
  }
};

var s = {
  brand: "nike",
  price: 4000,
};

var result = readProp(s, "color");

console.log(result);

var d = {
  name: "jhabbu",
  color: "gray"
};

var result = readProp(d, "name");
console.log(result);

var Tshirt = {
  color: "red",
  price: 700,
}
var result = readProp(Tshirt, "color");
console.log(result);*/


//---------------------------------------//
//creat car objeat..
var car = {
  brand: "suzuki",
  color: "whith",
  gear: 5,
  tyre: {
    color: "black",
    gear: 6,
    brand: "mrf"
  }
};
var result = car.tyre["brand"];
console.log(result);

var g = car.tyre["gear"];
console.log(g);

car.gear = 7;

car.tyre.brand = "CEAT";
console.log(car.tyre.brand);

var engine = {
  brand: "suzuki",
  hp: 1400,
  fuleType: "petrol"
};

car.engine = engine;
delete car.color;
console.log(car);



var t = {
  name: "karan"
}

var a = [1];