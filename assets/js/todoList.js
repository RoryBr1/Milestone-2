// EVENT LISTENER for #add-button
document.querySelector('body').addEventListener('click', event => {
    // Check if the clicked element was actually a #add-button
    if (event.target.matches('#add-button')) {
        console.log(activeMarkerName);
        addTodo();
    }
});

const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");

// COMPLETE BUTTON
const completeButton = document.createElement("button");
completeButton.innerHTML = `<button class="complete-btn"><i class="fas fa-check"></i></button>`;
$('body').on('click', '.complete-btn', function(){
  $(this).closest('li').toggleClass('todo-complete');
});

// DELETE BUTTON
const deleteButton = document.createElement("button");
deleteButton.innerHTML = `<button class="delete-btn"><i class="far fa-trash-alt"></i></button>`;
$('body').on('click', '.delete-btn', function(){
  $(this).closest('li').fadeOut( "medium");
});

// ADD TO LIST
function addTodo(){ 

const newTodo = document.createElement("li");
newTodo.innerHTML = `<span>` + activeMarkerName + `</span>` + `<div class="todo-buttons">` + completeButton.innerHTML + deleteButton.innerHTML + `</div>`;

newTodo.classList.add("todo-li");
todoList.appendChild(newTodo);
}