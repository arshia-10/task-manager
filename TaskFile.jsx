import React from 'react';
const TaskFile = ({ taskInput, handleInputChange, addTaskToList, addTasksToMainList, taskList }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h2 className="text-xl font-semibold mb-4">Add Your Tasks</h2>
      <input
        type="text"
        value={taskInput}
        onChange={handleInputChange}
        className="border-2 border-purple-500 p-2 rounded-md mb-4"
        placeholder="Enter task description"
      />
      <button
        onClick={addTaskToList}
        className="bg-purple-500 text-white px-6 py-2 rounded-lg mb-4 hover:bg-purple-600">
        Add Task
      </button>
      <div className="task-list">
        {taskList.length > 0 && taskList.map((task, index) => (
          <div key={index} className="mb-2 p-3 border-2 border-purple-300 rounded-md">
            {task}
          </div>
        ))}
      </div>
      {taskList.length > 0 && (
        <button
          onClick={addTasksToMainList}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-purple-600"
        >Add All Task</button>
      )}
    </div>
  );
};
export default TaskFile;
