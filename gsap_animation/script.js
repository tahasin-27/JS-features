// For box div
gsap.to(".box", {
    x: 1200,
    duration: 2,
    delay: 1,
    backgroundColor: "red",
    rotate: 360,
    borderRadius: "50%",
    scale: 0.5,
})

// for h1
gsap.from("h1", {
    y: 50,
    duration: 1,
    opacity: 0,
    delay: 1,
    stagger: 1, // Every element gonna come one by one in 1 second
})

// for circle
gsap.to(".circle", {
    x: 1200,
    borderRadius: "10px",
    duration: 2.5,
    delay: 1,
    rotate: 360,
    backgroundColor: "purple",
    repeat: -1, // infinite time
    yoyo: true, // to reverse the movement
})

// for box 1, 2 & 3

var timeLine = gsap.timeline()

timeLine.to(".box1", {
    x: 1200,
    duration: 2.5,
    // delay: 1.5,
})

timeLine.to(".box2", {
    x: 1200,
    rotate: 360,
    duration: 2.5,
    // delay: 4,
})

timeLine.to(".box3", {
    x: 1200,
    rotate: -360,
    duration: 2.5,
})