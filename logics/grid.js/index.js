function lodeIndex() {
    renderTredingArticles();
};


function renderTredingArticles() {
    var url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KonradDaWo"
    fetch(url)
        .then(response => response.json())
        .then(data => createTrerdingArticleList(data));
}

function createTrerdingArticleList(data) {

    for (var i = 0; i < data.items.length; i++) {
        console.log(data);
        var item = data.items[i];
        var feed = data.feed;
        var div = document.getElementsByClassName("box")[0];
        var items = document.createElement("div");
        items.setAttribute("class", "items");

        var divItems = document.createElement("div");
        divItems.setAttribute("class", "div-items");

        var logoImg = document.createElement("div");
        logoImg.setAttribute("class", "logo-img");

        var img = document.createElement("img");
        img.setAttribute("src", feed.image);

        var h4 = document.createElement("h4");
        h4.setAttribute("class", "#");
        h4.innerText = feed.title;

        var Hedding = document.createElement("h2");
        Hedding.setAttribute("class", "#");
        Hedding.innerText = item.title;

        var h3 = document.createElement("h3");
        h3.setAttribute("class", "#")
        h3.innerText = "king of rajesthan india ,,skg 21 github jjirefjd";

        var span = document.createElement("span");
        span.innerText =item.pubDate;

        var divImg = document.createElement("div")
        divImg.setAttribute("class", "div-img");

        var photos = document.createElement("img");
        photos.setAttribute("class", "#");
        photos.setAttribute("src", "https://cdn-images-1.medium.com/max/1024/1*v_AaJyYMeN6T1zvR9fVWLg.jpeg");



        div.appendChild(items);
        items.appendChild(divItems);
        divItems.appendChild(logoImg);
        logoImg.appendChild(img);
        logoImg.appendChild(h4);
        divItems.appendChild(Hedding);
        divItems.appendChild(h3);
        divItems.appendChild(span);
        items.appendChild(divImg);
        divImg.appendChild(photos);
    }

};