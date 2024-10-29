// Variable
// let question = document.querySelector(".question");
// let answer = document.querySelector(".answer");

const acordion = document.getElementsByClassName("content-container");
console.log(acordion)
// Loop
for (let i = 0; i < acordion.length; i++) {
    console.log(i);
    console.log(acordion[i])
    acordion[i].addEventListener("click", function () {
        console.log(acordion[i]);
        this.classList.toggle("active");
    });
}