window.onscroll = function () { this.navbar_entry() };
//window.onscroll = function () { this.cont_entry() };

var navbar = document.getElementById("navbar");
var cont = document.getElementById("about")
var sticky = cont.offsetTop;
//console.log("ABOUT TOP:", sticky);
var s1 = document.getElementById("about");
//console.log("ABOUT:", s1.offsetTop);
var s2 = document.getElementById("achievements");
//console.log("ACHIEVEMENTS:", s2.offsetTop);
var s3 = document.getElementById("ahead");
//console.log("AHEAD:", s3.offsetTop);
var s4 = document.getElementById("contact");
//console.log("AHEAD:", s4.offsetTop);
function navbar_entry() {
    if (window.pageYOffset % 10 == 0) {
        //console.log(window.pageYOffset);
    }
    var opacity = (window.pageYOffset - (sticky - 250)) / 200;
    if (opacity <= 1 && opacity >= 0){
      navbar.style.opacity = opacity;
    } else if (opacity < 0){
      navbar.style.opacity = 0;
    } else {
      navbar.style.opacity = 1;
    }
    //console.log(navbar.style.opacity);
}

function cont() {
    //open contacts panel
    document.getElementById("contact_pg").style.display = block;
    alert("1");
}