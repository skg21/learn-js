var person = {
    name: "Karan",
    address: "Beraheri",
    city: "Alwar"
};

function printAddress() {
    var p = document.createElement('p');
    p.innerHTML = "Name : " + person.name + "<br>"
                + "Address : " + person.address + "<br>"
                + "City : " + person.city;

    var addressDiv = document.getElementById('address-div');
    addressDiv.appendChild(p);
}