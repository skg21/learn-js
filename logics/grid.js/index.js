function lodeIndex() {
    createTrerdingArticleList();
};


function renderTredingArticles() {
    var url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KonradDaWo";
    then(url)
        .then(Response.json())
        .then(data = createTrerdingArticleList(data));
}


function createTrerdingArticleList() {

    for (var i = 0; i < 5; i++) {
        var div = document.getElementsByClassName("box")[0];
        var items = document.createElement("div");
        items.setAttribute("class", "items");

        var divItems = document.createElement("div");
        divItems.setAttribute("class", "div-items");

        var logoImg = document.createElement("div");
        logoImg.setAttribute("class", "logo-img");

        var img = document.createElement("img");
        img.setAttribute("src", "https://miro.medium.com/fit/c/25/25/1*iQYB9PakI5YQsF0GV_KKqQ.jpeg");

        var h4 = document.createElement("h4");
        h4.setAttribute("class", "#");
        h4.innerText = "sonu";

        var Hedding = document.createElement("h2");
        Hedding.setAttribute("class", "#");
        Hedding.innerText = "How to display Medium posts on a website with plain/vanilla JS. Basic API usage example." ;

        var h3 = document.createElement("h3");
        h3.setAttribute("class", "#")
        h3.innerText = "king of rajesthan india ,,skg 21 github jjirefjd";

        var span = document.createElement("span");
        span.innerText = "13//7/2021";

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