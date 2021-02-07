var shoes = [
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
  if (obj.hasownPropety(prop)) {
    return obj[prop];
  } else {
    return "Not found";
  }
};