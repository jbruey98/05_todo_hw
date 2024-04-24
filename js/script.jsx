<form onSubmit={handleAddTask}>
    <input type="text" name="taskInput" />
    <button type="submit">Add Task</button>
    <button onClick={(event) => handleDeleteTask(event, taskId)}>Delete Task</button>

    <div id="todo" onDrop={(event, ui) => handleDrop(event, ui)} onDragOver={(event) => event.preventDefault()}>
    
    </div>
</form>
