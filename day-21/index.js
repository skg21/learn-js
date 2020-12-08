function getTeacherDetails() {
    var url = " http://127.0.0.1:3000/";
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            var teacher = JSON.parse(this.responseText);
            console.log(teacher.name);
            console.log(teacher.age);

            var nameDOM = document.getElementById("teacher-name");
            nameDOM.innerHTML += teacher.name;

            var villageDOM = document.getElementById("teacher-village");
            villageDOM.innerHTML += teacher.village;

            var ageDOM = document.getElementById("teacher-age");
            ageDOM.innerHTML += teacher.age;

            var subject = document.getElementById("teacher-subject");
            subject.innerHTML += teacher.subject;
        }
    }
}


