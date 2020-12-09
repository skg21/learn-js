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

            var subject = document.getElementById("teacher-subject");
            ageDOM.innerHTML += teacher.age; ");
            subject.innerHTML += teacher.subject;
        }
    }
}
//---------------------------
function getStudentsDetails() {
    var url = "http://127.0.0.1:3000/";
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.send();
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            var students = JSON.parse(this.responseText);
            console.log(students.name);
            console.log(students.age);

            var nameDOM = document.getElementById("students-name");
            nameDOM.innerHTML += students.name;

            var villageDom = document.getElementById("students-villege");
            villageDom.innerHTML += students.village;

            var ageDom = document.getElementById("students-age");
            ageDom.innerHTML += students.age;

            var subjectDOM = document.getElementById("students-subject");
            subjectDOM.innerHTML += students.subject;
        }
    }
}
function userDatadetails() {
    var url = "";
    var req = new XMLDocument();
    req.open("GET", url);
    req.send();
    req.onreadystatechange = function () {
        if (this.onreadystatechange === 4) {
            var students = JSON.parse(this.responseText);
            console.log(students.name);
            console.log(students.age);

            var namrDom = document.getElementById("students-name");
        }
    }
}

