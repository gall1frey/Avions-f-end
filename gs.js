//import { gsap } from "gsap";
//import ScrollTrigger from "gsap/ScrollTrigger";

//gsap.registerPlugin(ScrollTrigger);

gsap.set("#hme", { scale: 1 });
gsap.timeline()
    .from("#hme", { duration: 1, opacity: 0, delay: 1.5 })

gsap.utils.toArray(".card").forEach(card => {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: card,
            toggleActions: "play none play reset",
            start: "top 95%",
            end: "+=30px",
            //markers: "true"
        }
    });

    tl.to(card, {
        duration: 0.5,
        xPercent:25
    });
});

gsap.to(".about_cont_1", {
    scrollTrigger: {
        trigger: ".about_cont_1",
        toggleActions: "play reverse play reverse",
        start: "top center",
        //markers:"true"
    },
    opacity: 1,
    duration: 2
}
);

gsap.to(".about_cont_2", {
    scrollTrigger: {
        trigger: ".about_cont_2",
        toggleActions: "play reverse play reverse",
        start: "top center",
        //markers: "true"
    },
    opacity: 1,
    duration: 2
}
);
/*
gsap.to("#hme", {
    scrollTrigger: {
        trigger: "#hme",
        toggleActions: "play reverse play reverse",
        start: "top center",
        //markers: "true"
    },
    opacity: 0,
    duration: 2
}
);*/

var buttons = document.querySelectorAll(".btn");
var modalOverlay = document.querySelector(".modalOverlay");
var modal = document.querySelector(".messageWrapper");
var lastButton;

TweenMax.set([modalOverlay, modal], { autoAlpha: 0 });

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", popUp);
}

function popUp() {
    var newRect = getPosition(modal, this);
    
    //console.log(newRect);
    lastButton = this;

    TweenMax.set(modal, {
        x: newRect.left,
        y: newRect.top,
        width: newRect.width,
        height: newRect.height
    });

    var show = new TimelineMax();

    show.to(modalOverlay, 0.5, { autoAlpha: 0.75 });
    show.to(modal, 0.5, {
        x: 0,
        y: 0,
        width: 800,
        height: 400,
        autoAlpha: 1
    });
    
    document.querySelector(".message").innerHTML = `
                <div style="font-size:20px;float:left;width:40%;">
                    <p style="font-weight:700">` + this.children[0].textContent +`</p>
                    ` + this.children[1].textContent+ `
                </div>
                <div style="float:right;width:50%;">
                    <img src="img_parallax4.jpg" style="height:200px; width=400px;">
                </div>`;
}

modalOverlay.addEventListener("click", function () {
    var newRect = getPosition(modal, lastButton);
    var hide = new TimelineMax();

    TweenMax.killTweensOf(".messageWrapper");

    hide.to(modal, 0.5, {
        autoAlpha: 0,
        x: newRect.left,
        y: newRect.top,
        height: newRect.height,
        width: newRect.width
    });
    hide.to(".modalOverlay", 0.5, { autoAlpha: 0 });
});

function getPosition(elem, target) {
    var targetRect = target.getBoundingClientRect();
    var elemRect = elem.getBoundingClientRect();

    TweenLite.set(elem, {
        x: 0,
        y: 0,
        width: targetRect.width,
        height: targetRect.height
    });
    var newRect = elem.getBoundingClientRect();
    TweenLite.set(elem, { width: elemRect.width, height: elemRect.height });
    return {
        left: targetRect.left - newRect.left,
        top: targetRect.top - newRect.top,
        width: newRect.width,
        height: newRect.height
    };
}
