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