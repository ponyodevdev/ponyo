document.addEventListener('DOMContentLoaded', () => {
    const toDo = document.querySelector('#toDo');
    const addButton = document.querySelector('#addButton');
    const toDoList = document.querySelector('#toDoList');

    const storedToDos = JSON.parse(localStorage.getItem('toDos')) || [];
    storedToDos.forEach((storedToDo) => {
        addItem(storedToDo.text, storedToDo.completed);
    });

    addButton.addEventListener('click', (event) => {
        const inputValue = toDo.value.trim();

        if (inputValue !== '') {
            addItem(inputValue);

            saveToLocalStorage();
        }
    });

    function addItem(todoText, completed = false) {
        const item = document.createElement('div');

        const text = document.createElement('span');
        text.textContent = todoText;

        const removeButton = document.createElement('button');
        removeButton.textContent = '삭제';

        removeButton.addEventListener('click', (event) => {
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode);

            saveToLocalStorage();
        });

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.checked = completed;

        checkBox.addEventListener('change', (event) => {
            const isChecked = checkBox.checked;
            text.style.textDecorationLine = isChecked ? "line-through" : "none";

            saveToLocalStorage();
        });

        item.appendChild(checkBox);
        item.appendChild(text);
        item.appendChild(removeButton);

        // Apply text decoration based on the completed status
        text.style.textDecorationLine = completed ? "line-through" : "none";

        toDoList.appendChild(item);
        toDo.value = '';
    }

    function saveToLocalStorage() {
        const todos = [];
        const toDoItems = toDoList.children;

        for (let i = 0; i < toDoItems.length; i++) {
            const textElement = toDoItems[i].querySelector('span');
            const checkBoxElement = toDoItems[i].querySelector('input[type="checkbox"]');

            if (textElement && checkBoxElement) {
                todos.push({
                    text: textElement.textContent,
                    completed: checkBoxElement.checked,
                });
            }
        }

        localStorage.setItem('toDos', JSON.stringify(todos));
    }
});