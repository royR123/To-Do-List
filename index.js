
const inputText = document.querySelector('#input-text');
const btn = document.querySelector('#add-btn');
const taskContainer = document.querySelector("#all-tasks");
console.log(inputText)
let task = "";
window.onload = () => {
    showData();
}
inputText.addEventListener("input", (event) => {
    task = event.target.value;
});

taskContainer.addEventListener('click' , (e) => {

    if(e.target.tagName === 'BUTTON'){
        taskContainer.removeChild(e.target.parentElement);
        console.log(e.target.tagName);
        console.log(e.target.classList);
        console.log(e.target);
        saveData();
    }else{
        e.target.classList.toggle('task-completed');
        saveData();
    }
})

btn.addEventListener('click' , (e) => {
    if(task === ""){
        return ;
    }else{
        // const tk = document.createElement()
        const templateTasks = document.querySelector("#template-daily-tasks");
        const taskElement = templateTasks.content.cloneNode(true);
        console.log(templateTasks);
        console.log(taskElement);
        const inp = taskElement.querySelector('p');
        inp.innerHTML = task;
        const del = taskElement.querySelector('button');
        taskContainer.appendChild(taskElement);
        inputText.value = "";
        task = "";
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data" , taskContainer.innerHTML);
}
function showData(){
    taskContainer.innerHTML = localStorage.getItem("data");
}


