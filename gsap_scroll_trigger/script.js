gsap.to(".page1 .box", {
    scale: 0, // Scale means increasing or decreasing size of any object
    rotate: 360,
    duration: 1,
    delay: 1,
    repeat: -1,
})

gsap.from(".page2 .box", {
    scale: 0,
    rotate: 360,
    duration: 1,

    // scrollTrigger: ".page2 .box",
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 1, // do the work for starting & ending animation execution smoothness
    }
})

gsap.to(".page3 .box", {
    x: 400,
    duration: 2,
    scrollTrigger: {
        trigger: ".page3 .box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: true,
        pin: true,
    }
})