const addButton = document.querySelector("#add-button");
const itemList = document.querySelector("#item-list")

// EVENT LISTENER for #add-button
document.querySelector('body').addEventListener('click', event => {
    // Check if the clicked element was actually a #add-button
    if (event.target.matches('#add-button')) {
        console.log(activeMarkerName);
        addListItem();
    }
});

// FUNCTIONS
const completeButton = document.createElement("button");
completeButton.innerHTML = `<button class="complete-btn"><i class="fas fa-check"></i></button>`;
completeButton.classList.add("complete-btn");
completeButton.addEventListener("click", completeListItem);

const deleteButton = document.createElement("button");
deleteButton.innerHTML = `<button class="delete-btn"><i class="far fa-trash-alt"></i></button>`;
deleteButton.classList.add("delete-btn");
deleteButton.addEventListener("click", deleteListItem);

//add exercise to list
function addListItem(event){ 

const listItem = document.createElement("div");
listItem.classList.add("list-item");

//list item
const newListItem = document.createElement("li");
newListItem.innerHTML = 
    `hello world` + completeButton.innerHTML + deleteButton.innerHTML;

newListItem.classList.add("exercise-li");
itemList.appendChild(newListItem);

}

function completeListItem(e) {
    console.log("hello world");
}

function deleteListItem(e) {
    console.log("delete world")
}