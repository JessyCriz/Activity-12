const todoInput = document.getElementById("todoInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function createTaskItem(taskText) {
    const li = document.createElement("li");
    
    const taskContainer = document.createElement("div");
    taskContainer.setAttribute("style", "display: flex; justify-content: space-between; align-items: center; padding: 5px;");

    const taskTextElement = document.createElement("span");
  taskTextElement.textContent = taskText;

  taskTextElement.addEventListener("click", () => {
    li.classList.toggle("done");
});   

    taskContainer.appendChild(taskTextElement);
    li.appendChild(taskContainer);
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.setAttribute("style", "background-color: #ff0000; color: #fff; border: none; cursor: pointer; padding: 5px 10px; border-radius: 50%;");
  
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
  
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