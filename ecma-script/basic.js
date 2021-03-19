if (true) {
    let k = 5;
    console.log("local: ", k);
}
console.log("global: ", k);
function checkScope() {
    var i = 'function scope';
    if (true) {
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}