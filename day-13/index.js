function readHTML() {
    var myH1 = document.getElementsByTagName('h1');
    console.log(myH1.length);
    //[h1, h2]
    for(var i = 0; i < myH1.length; i++) {
        console.log(myH1[i]);
    }

   console.log("-------------- reading html by id -----------------");
   //css
   // #p {}

   var myP = document.getElementById('p');
   console.log(myP);
   console.log(myP.innerHTML);

   console.log("-------------- reading html by classname -----------");
   var myDiv = document.getElementsByClassName('myDiv');
   console.log(myDiv[0]);
}