// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const timestamp = Date.now(); 
    const randomNum = Math.floor(Math.random() * 1000); 
  
    
    const taskId = `task_${timestamp}_${randomNum}`;
  
    return taskId
  }
  
  
  const taskId = generateTaskId()
  console.log(taskId)

// Todo: create a function to create a task card
function createTaskCard(task) {
    
    const card = document.createElement('div');
    card.classList.add('card', 'mb-3');
  
   
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${task.name}</h5>
        <p class="card-text">${task.description}</p>
      </div>
    `;
  
    return card;
  }
  
  
  const sampleTask = {
    name: 'Sample Task',
    description: 'This is a sample task description.'
  };
  
  
  const taskCard = createTaskCard(sampleTask);
  
  
  const taskContainer = document.getElementById('todo-cards'); 
  taskContainer.appendChild(taskCard);

// Todo: create a function to render the task list and make cards draggable
function renderTaskList(tasks) {
    const todoContainer = document.getElementById('todo-cards');
  const inProgressContainer = document.getElementById('in-progress-cards');
  const doneContainer = document.getElementById('done-cards');

  
  todoContainer.innerHTML = '';
  inProgressContainer.innerHTML = '';
  doneContainer.innerHTML = '';

  
  tasks.forEach(task => {
    const card = createTaskCard(task); 

  
    if (task.status === 'To Do') {
      todoContainer.appendChild(card);
    } else if (task.status === 'In Progress') {
      inProgressContainer.appendChild(card);
    } else if (task.status === 'Done') {
      doneContainer.appendChild(card);
    }
  });
}


const tasks = [
  { name: 'Task 1', description: 'Description 1', status: 'To Do' },
  { name: 'Task 2', description: 'Description 2', status: 'In Progress' },
  { name: 'Task 3', description: 'Description 3', status: 'Done' }
];


renderTaskList(tasks);


// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    
    event.preventDefault()


    const newTask = event.target.elements.taskInput.value



    
    event.target.elements.taskInput.value = '';

 
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

    event.preventDefault()

    console.log (`Task deleted with ID: ${taskId}`)

}

<button onClick={(event) => handleDeleteTask(event, taskId)}>Delete Task</button>

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    
    const taskId = ui.draggable.attr('data-task-id');

    
    const newStatusLane = event.target.id;

    
    console.log(`Task with ID ${taskId} dropped into ${newStatusLane} lane`);
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker

$(document).ready(function () {
    
    renderTaskList();

    
    $('.delete-task-button').on('click', function(event) {
        handleDeleteTask(event);
    });

    
    $('.status-lane').droppable({
        drop: function(event, ui) {
            handleDrop(event, ui);
        }
    });

    
    $('#due-date').datepicker()
});