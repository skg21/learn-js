function createUser() {
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var dob = document.getElementById("dob").value;

    var maleGender = document.getElementById("male-gender");
    var femaleGender = document.getElementById("female-gender");

    var gender = "";

    if (maleGender.checked) {
        gender = maleGender.value;
    }

    if (femaleGender.checked) {
        gender = femaleGender.value;
    }

    var country = document.getElementById("country").value;

    var u = new User(fullName, email, password, dob, gender, country);

    console.log(u);
}

function User(fullName, email, password, dob, gender, country) {
    this.fullName = fullName,
        this.email = email,
        this.password = password,
        this.dob = dob,
        this.gender = gender,
        this.country = country
}