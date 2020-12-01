function getGithubUserInfo() {
    var url = "https://api.github.com/users/skg21";

    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.onreadystatechange = function () {
        console.log(this.responseText);
    };
    req.send();
}
//--------------------------------------------------------------//

function getGithubUser() {
    var url = "https://api.github.com/users/karsingh991";
    var karan = new XMLHttpRequest();
    karan.open("GET", url);
    karan.onreadystatechange = function () {
        console.log(this.responseText);
    };
    karan.send();
}