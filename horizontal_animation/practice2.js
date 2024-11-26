// var redRect = document.querySelector((".rect"));

window.addEventListener("mousemove", function (details) {
    var rect = document.querySelector(".rect");

    var xval = gsap.utils.mapRange(
        0, 
        window.innerWidth, 
        100 + rect.getBoundingClientRect().width/2, 
        window.innerWidth - (100 + rect.getBoundingClientRect().width/2), 
        details.clientX
    );

    // gsap.to(".rect", {
    //     left: details.clientX + "px",
    //     ease: Power3,
    // });
    gsap.to(".rect", {
        left: xval + "px",
        ease: Power3,
    });
});

