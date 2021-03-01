var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KonradDaWo";
var req = new XMLHttpRequest();
req.open("GET", url);
req.send();
req.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log(typeof this.responseText);
        var response = JSON.parse(this.responseText);

        for (var i = 0; i < response.items.length; i++) {
            console.log("Title: ", response.items[i].title);
            console.log("Author: ", response.items[i].author);

            console.log("categories:");

            var categories = response.items[i].categories;
            for (var j = 0; j < categories.length; j++) {
                console.log(categories[j]);
            }
            console.log("-----------------------");
        }
    }
}
console.log("----------------------------------------------------------");

