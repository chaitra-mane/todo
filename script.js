document.getElementById('add-button').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');
        const newTodo = document.createElement('li');
        
        newTodo.innerHTML = `
            <span>${todoText}</span>
            <button class="complete-button">Done</button>
            <button class="delete-button">Remove</button>
        `;

        todoList.appendChild(newTodo);
        todoInput.value = '';

        newTodo.querySelector('.complete-button').addEventListener('click', function() {
            newTodo.querySelector('span').classList.toggle('complete');
        });

        newTodo.querySelector('.delete-button').addEventListener('click', function() {
            newTodo.remove();
        });
    }
}
