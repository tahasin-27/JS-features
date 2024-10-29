 const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) => {
    let prev = 0;
        return (...args) => {
            let now = new Date().getTime();
            if (now - prev > delay) {
                prev = now;
                return func(...args);
        }
    }
}

document.querySelector(".center")
.addEventListener("mousemove",throttleFunction((details) => {
    //my less repeatation code
    var div = document.createElement("div");
    div.classList.add("imgdiv");
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute("src", "https://images.unsplash.com/photo-1721332149371-fa99da451baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D");
    div.appendChild(img);


    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: 0.5,
    })

    gsap.to(img, {
        y: "100%",
        delay: 0.6,
        ease: Power2,
        // duration: 0.2,
    })

    setTimeout(function() {
        div.remove();
    }, 2000);
}, 400));

