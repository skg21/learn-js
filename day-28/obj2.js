// Setup
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    charlie: "chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }

  result = lookup[val];

  return result;
}

console.log(phoneticLookup("echo"));
