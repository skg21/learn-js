var books = `{
    "book": [
    {
    "id":"01",
    "language": "Java",
    "edition": "third",
    "author": "Herbert Schildt"
    },
    {
    "id":"07",
    "language": "C++",
    "edition": "second",
    "author": "E.Balagurusamy"
    },
    {
        "id":"02",
        "language": "js",
        "edition": "first",
        "author": "karan singh"
    }
    ]
    }
    `;
var obj = JSON.parse(books);
console.log(obj.book[0].id);
for(var i = 0; i < obj.book.length; i++) {
    console.log(obj.book[i].author);
    console.log(obj.book[i].id);
}


