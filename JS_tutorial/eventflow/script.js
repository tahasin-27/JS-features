window.addEventListener("click", function() {
    console.log("window");
}, true)

document.querySelector(".div2").addEventListener("click", function(e) {
    // e.stopPropagation();
    console.log("div2");
}, {once: true})
document.querySelector(".div1").addEventListener("click", function() {
    console.log("div1");
}, true)

document.querySelector("a").addEventListener("click",
    function(e) {
        e.preventDefault();
        console.log(e.target.innerText = "clicked!")
    },true
);