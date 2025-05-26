function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

li.onclick = function () {
    li.classList.toggle('completed');
};

li.ondblclick = function () {
    li.remove();
};

// TODO: Implementar guardado de tareas usando localStorage
// localStorage.setItem('tasks', JSON.stringify(tareas));

