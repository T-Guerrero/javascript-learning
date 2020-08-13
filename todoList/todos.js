let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement  = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [
    'Fazer café',
    'Estudar Javascript',
    'Estudar vue'
];

function renderTodos(){
    listElement.innerHTML = '';
    for (todo of todos){
        let todoElement = document.createElement('li');
        let removeElement = document.createElement('a');
        removeElement.appendChild(document.createTextNode('Excluir'));
        removeElement.href = '#'
        removeElement.addEventListener('click', deleteTodo);

        todoElement.appendChild(document.createTextNode(todo));
        todoElement.appendChild(removeElement);

        listElement.appendChild(todoElement);
    }
}

function addTodo(){
    let todoText = inputElement.value;
    if (todoText.trim()){
        todos.push(todoText);
        inputElement.value = '';
    }
    renderTodos();
    saveToStorage();
}

function deleteTodo(e){
    let pos = todos.indexOf(e.target.parentNode.childNodes[0]);
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.addEventListener('click', addTodo);
renderTodos();