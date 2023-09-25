const todoInput = document.getElementById("todoInput");
const addTaskButton = document.getElementById("addTask")
const taskList = document.getElementById("taskList")

function createTaskItem(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
  
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });
  
    li.appendChild(deleteButton);
  
    li.addEventListener("click", () => {
      li.classList.toggle("done");
    });
  
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
  