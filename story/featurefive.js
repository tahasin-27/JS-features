var arr = [
    {dp: "https://images.unsplash.com/photo-1726688837477-c8cbcab8e05a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8", story: "https://images.unsplash.com/photo-1727197093259-e89dc8ccd8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"},

    {dp: "https://images.unsplash.com/photo-1727880105374-67a9108b638a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1727884747971-7227f47adbf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://images.unsplash.com/photo-1728233363803-88a1226bf91d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1728324739997-b2cc990808c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://plus.unsplash.com/premium_photo-1727894731207-54d76ab3b7bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8", story: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"},
];

var stories = document.querySelector(".stories");

var clutter = "";
arr.forEach(function(element, idx) {
    clutter += `<div class="story">
                    <img id="${idx}" src="${element.dp}" alt="">
                </div>`;
});

stories.innerHTML = clutter;

stories.addEventListener("click", function(details) {
    document.querySelector(".full-screen").style.display = "block";
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[details.target.id].story})`;

    setTimeout(function() {
    document.querySelector(".full-screen").style.display = "none";
    }, 3000);
});
