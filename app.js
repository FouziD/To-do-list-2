const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

//Add a task
const addTask =() => {
const taskText = todoInput.ariaValueMax.trim();

if(taskText !==''){
    const taskItem = createTaskItem(taskText)
}
}
//Create new task items
const createTaskItem = (taskText) => {
    const taskItem = document.createElement('li');
    taskItem.className= "todo-item";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    document.classList.add('delete-btn')
    deleteBtn.addEventListener('click', deleteTask)

    taskItem.appendChild(checkbox)
    taskItem.appendChild(taskTextSpan)
    taskItem.appendChild(deleteBtn)

    return taskItem;
}
// Delete out tasks
//Event Listeners
//Examples of task