// Variables
let modelContainer = document.querySelector(".model-container");
let btnDiv = document.querySelector(".btn-div");
let btn = document.querySelector(".btn");

// Adding event listener
modelContainer.addEventListener("click", function() {
    btnDiv.style.display = "block";
})

btn.addEventListener("click", function() {
    btnDiv.style.display = "none";
})

window.addEventListener("click", function(e) {
    console.log(e.target)
    if(e.target === btnDiv) {
        btnDiv.style.display = "none";
    }
})