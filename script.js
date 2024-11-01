let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const dueDateInput = document.getElementById('dueDateInput');

    if (taskInput.value.trim() === '') return;

    const task = {
        id: Date.now(),
        text: taskInput.value,
        priority: prioritySelect.value,
        dueDate: dueDateInput.value,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    updateTaskList();
    taskInput.value = '';
}

function updateTaskList() {
    const container = document.getElementById('taskContainer');
    container.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 	ask-item priority-;
        if (task.completed) taskElement.classList.add('completed');

        taskElement.innerHTML = 
            <input type='checkbox'  
                   onclick='toggleTask()'>
            <div class='task-content'>
                <div></div>
                <div class='task-date'></div>
            </div>
            <button class='delete-button' onclick='deleteTask()'>
                Delete
            </button>
        ;

        container.appendChild(taskElement);
    });
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        updateTaskList();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    updateTaskList();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Initialize
updateTaskList();
