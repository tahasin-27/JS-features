const main = document.querySelector(".main");

const scroll = new LocomotiveScroll({
    el:main, // we can't put any name but el;
    smooth:true,
    lerp: 0.01,
});
