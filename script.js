const todoInput = document.getElementById("todoInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function createTaskItem(taskText) {
    const li = document.createElement("li");
    
    const taskContainer = document.createElement("div");

    const taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;

  taskTextElement.addEventListener("click", () => {
    li.classList.toggle("done");
});   

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
      });

    taskContainer.appendChild(taskTextElement);
    taskContainer.appendChild(deleteButton);
    li.appendChild(taskContainer);
  
    return li;
  }
  
  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
  
    if (taskText !== "") {
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
      todoInput.value = "";
    } else {
      alert("Please enter a valid task.");
    }
  });
  
  todoInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });