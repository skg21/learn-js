function getGithubUserInfo() {
    //get username from input text
    var username = document.getElementById("username");
    var url = "https://api.github.com/users/" + username.value;

    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            //convert from string to javascript object
            var response = JSON.parse(this.responseText);
            console.log(response);
            console.log("username: ", response.login);
            console.log("avator url: ", response.avatar_url);
            // create img tag <img src="url">
            var img = document.createElement("img");
            img.setAttribute("src", response.avatar_url);

            //create h2 element
            var h2 = document.createElement("h2");
            h2.innerHTML = response.name;

            //get github-user-info div by id
            var div = document.getElementById("github-user-info");
            console.log(div);
            div.appendChild(img);
            div.appendChild(h2);
        }
    };
    req.send();
}
//-------------------------------------------------------------------------------------//
function getGithubUser() {
    var username = document.getElementsByClassName("username");
    var url = "https://api.github.com/users/" + username[0].value;
console.log(url);
    var karan = new XMLHttpRequest();
    karan.open("GET", url);
    karan.onreadystatechange = function () {
        if (karan.readyState === 4) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            console.log("username", response.login);
            console.log("avator url:", response.avatar_url);

            var img = document.createElement("img");
            img.setAttribute("src", response.avatar_url);
            var h2 = document.createElement("h2");
            h2.innerHTML = response.name;

            var div = document.getElementsByClassName("github-user-info");
            console.log(div[0]);
            div[0].appendChild(img);
            div[0].appendChild(h2);
        }
    };
    karan.send();
}