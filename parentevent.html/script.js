document.querySelector(".spots")
.addEventListener("click", function(e) {
    console.log(e.target.getAttribute("id") + " is clicked!");

    // const target = e.target;
    if(e.target.matches("li")) {
        e.target.style.backgroundColor = "lightgray";
    }
})

const sports = document.querySelector(".spots");
const newEelement = document.createElement("li");

newEelement.innerText = "rubiks cube";
newEelement.setAttribute("id", "rubiks_Cube");
