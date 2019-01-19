var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
  'Fazer café',
  'Estudar Javascript',
  'Acessar comunidade da Rocketseat'
];

function renderTodos() {
  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function clearListTodos() {
  listElement.innerHTML = '';
}

function addTodo() {
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';

  apagarTodosTodos();
  renderTodos();
}

buttonElement.onclick = addTodo;