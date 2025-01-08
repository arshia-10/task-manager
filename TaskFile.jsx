import React from 'react';
const TaskFile = ({taskInput,handleInputChange,addTaskToList, addTasksToMainList,taskList,}) => {
  return (
    <div className="task-file">
      <h2>Add Your Tasks</h2>
      <input type="text" value={taskInput} onChange={handleInputChange} placeholder="Enter task"/>
      <button onClick={addTaskToList}>Add Task</button>
      <div className="task-list">
        {taskList.map((task, index) => (
          <div key={index} className="task-item">
            {task}
          </div>
        ))}
      </div>
      <button onClick={addTasksToMainList} className="final-add-btn">Add All Tasks</button>
    </div>
  );
};
export default TaskFile;
