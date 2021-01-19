// EVENT LISTENER for #add-button
document.addEventListener('DOMContentLoaded', getTodos);
document.querySelector('body').addEventListener('click', event => {
    // Check if the clicked element was actually a #add-button
    if (event.target.matches('#add-button')) {
        console.log(activeMarkerName);
        addTodo();
    }
});

const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

// DELETE BUTTON
const deleteButton = document.createElement("button");
deleteButton.innerHTML = `<button class="delete-btn"><i class="far fa-trash-alt"></i></button>`;
$('body').on('click', '.delete-btn', function(){
  $(this).closest('li').fadeOut( "medium");
  removeLocalTodos($(this).parent().parent().html());
});

// ADD TO LIST
function addTodo(){ 
  const newTodo = document.createElement("li");
  newTodo.innerHTML = `<span>` + activeMarkerName + `</span>` + `<div class="todo-buttons">` + deleteButton.innerHTML + `</div>`;
  newTodo.classList.add("todo-li");
  // ADD TODO TO LOCAL STORAGE
  saveLocalTodos(newTodo.innerHTML);
  todoList.appendChild(newTodo);
}

// STORE TO LOCALSTORAGE
function saveLocalTodos(todo){
  // CHECK IF TODO ITEMS ALREADY STORED
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
  // CHECK IF TODO ITEMS ALREADY STORED
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
    }else{
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
      const newTodo = document.createElement("li");
      newTodo.innerHTML = todo;
      todoList.appendChild(newTodo);
      newTodo.classList.add("todo-li");
    });
}

function removeLocalTodos(thisTodo){
  let todos = [];
  if(localStorage.getItem('todos') === null){
    todos = [];
    }else{
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    
    const todoIndex = todos.indexOf(thisTodo);
    console.log(todoIndex);
    todos.splice(todos.indexOf(todoIndex), 1);
}