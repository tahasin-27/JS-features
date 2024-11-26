var isStatus = document.querySelector("h5");

var btn = document.querySelector(".add");

// var removeFrnd = document.querySelector(".remove");

var flag = 0;

btn.addEventListener("click", function() {
    if(flag === 0) {
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML = "Remove Friend"
        flag = 1;
    }
    else {
        isStatus.innerHTML = "Stranger";
        isStatus.style.color = "red";
        btn.innerHTML = "Add Friend"
        flag = 0;
    }
});

// removeFrnd.addEventListener("click", function() {
//     isStatus.innerHTML = "Stranger";
//     isStatus.style.color = "red";
// })