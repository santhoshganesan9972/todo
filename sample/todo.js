const container = document.getElementById("input_container");
const taskinput = document.getElementById("input");
const add_btn = document.getElementById("add_btn");
const tasklists = document.getElementById("tasklists");

function addTask() {

    const tasks = taskinput.value.trim();

    if (tasks) {

        createTaskElement(tasks);
        saveTasks();
        taskinput.value = "";

    }
    else {
        alert("enter your task...");
    }

}

add_btn.addEventListener('click', addTask);

function createTaskElement(tasks) {

    const taskElements = document.createElement('li');
    const deletebtn = document.createElement('button');

    deletebtn.textContent = "Delete";
    taskElements.textContent = tasks;

    tasklists.appendChild(taskElements);
    taskElements.appendChild(deletebtn);

    deletebtn.addEventListener('click', () => {
        tasklists.removeChild(taskElements);
        saveTasks();
    })

}



function saveTasks() {
    const values = [];
    const tL = tasklists.querySelectorAll('li');

    tL.forEach((item) => {
        const tasker = item.textContent.replace("Delete", "").trim();
        values.push(tasker);
    });

    localStorage.setItem('tasks', JSON.stringify(values));

}

function takeTasksFromStorage() {

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(createTaskElement);

}
takeTasksFromStorage();

