// Select elements
const input = document.querySelector('input[type="text"]');
const button = document.querySelector('input[type="button"]');
const sectionDiv = document.querySelector('section div');

// Create task list
const taskList = document.createElement('ul');
sectionDiv.appendChild(taskList);

// Load tasks on page load
window.addEventListener('load', () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTaskToList(task));
});

// Add task
button.addEventListener('click', () => {
    const taskText = input.value.trim();

    if (taskText !== '') 
    {
        addTaskToList(taskText);
        saveTask(taskText);
        input.value = '';
    }
});

// Add task to UI
function addTaskToList(task) {
    const li = document.createElement('li');
    li.innerText = task;

    // Delete on click
    li.addEventListener('click', () => {
        deleteTask(task);
        li.remove();
    });

    taskList.appendChild(li);
}

// Save to localStorage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task from localStorage
function deleteTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks
function clearTasks() {
    localStorage.removeItem('tasks');
    taskList.innerHTML = '';
}
