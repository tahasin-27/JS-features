// Variables
const addTask = document.querySelector(".add-task");
const inputText = document.querySelector(".text");
console.log(inputText);
const taskContainer = document.querySelector(".task-container");

// Adding event listener
addTask.addEventListener("click", function() {
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${inputText.value}`;
    console.log(li);
    task.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add("check");
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteBtn.classList.add("trash");
    task.appendChild(deleteBtn);

    if(inputText.value === "") {
        alert("Please add a task");
    } else {
        taskContainer.appendChild(task);
    }

    inputText.value = "";

    checkBtn.addEventListener("click", function() {
        checkBtn.parentElement.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener("click", function(e) {
        let target = e.target;
        target.parentElement.parentElement.remove();
    })

});