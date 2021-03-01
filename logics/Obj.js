var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = "https://api.github.com/events";
var req = new XMLHttpRequest();
req.open("GET", url);
req.send();
req.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log(typeof this.responseText);
        var response = JSON.parse(this.responseText);
        for (var i = 0; i < response.length; i++) {
            console.log("ID:", response[i].id);
            console.log("TYPE:", response[i].type);
            console.log("DisplayLoginName:", response[i].actor.display_login);
            console.log("RepoName: ", response[i].repo.name);
            console.log("CreatedAt:", response[i].created_at);
            console.log("===========================");
        }

    }
};
