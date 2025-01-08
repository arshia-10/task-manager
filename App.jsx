import  { useState } from 'react';
import TaskFile from "./TaskFile";
import ShortCard from "./ShortCard";
import "./App.css"
const App = () => {
  const [tasks, setTasks] = useState([]); 
  const [isCardOpen, setIsCardOpen] = useState(false); 
  const [taskInput, setTaskInput] = useState(""); 
  const [taskList, setTaskList] = useState([]); 
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };
const addTaskToList = () => {
    if (taskInput) {
      setTaskList([...taskList, taskInput]);
      setTaskInput("");
    }
  };
  const addTasksToMainList = () => {
    setTasks([...tasks, ...taskList]);
    setTaskList([]); 
    setIsCardOpen(false); 
  };
  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <button className="add-task-btn" onClick={() => setIsCardOpen(true)}>
        <span>+</span> Add Task
      </button>
      {isCardOpen && (
        <TaskFile
          taskInput={taskInput} handleInputChange={handleInputChange} addTaskToList={addTaskToList} addTasksToMainList={addTasksToMainList}
          taskList={taskList}
        />
      )}
      <ShortCard tasks={tasks} />
    </div>
  );
};
export default App;
