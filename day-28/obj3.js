// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
/*
function updateRecords(object, id, prop, value) {
  if (value === "") {
    return object;
  }

  if (prop == "tracks") {
    if (object[id][prop] != "undefined") {
      object[id][prop].unshift(value);
    } else {
      object[id][prop] = [value];
    }
  } else {
    object[id][prop] = value;
  }

  return object;
}

var result = updateRecords(collection, 2468, "tracks", "Free")

console.log(result) */

function updateRecords(object, id, prop, value) {
  if (collection.hasOneProPerty(prop)) {
    return obj[prop];

  } else {
    return "Note Found";
  }
};


