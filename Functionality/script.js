// Get the input field and task list
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// Add a new task to the list
function addTask() {
  // Get the task text from the input field
  var taskText = taskInput.value;
  // Create a new list item
  var listItem = document.createElement("li");
  // Add the task text to the list item
  listItem.innerText = taskText;
  // Create a delete button for the task
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  // Add a click event listener to the delete button
  deleteButton.addEventListener("click", function() {
    listItem.remove();
  });
  // Add the delete button to the list item
  listItem.appendChild(deleteButton);
  // Add the list item to the task list
  taskList.appendChild(listItem);
  // Clear the input field
  taskInput.value = "";
}
