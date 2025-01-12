import React, { useState } from 'react';
import NavBar from './NavBar';
import Text from './Text';
import TaskFile from './TaskFile'; 
import ShortCard from './ShortCard'; 
import SignUpForm from './SignUp'; 
const App = () => {
  const [tasks, setTasks] = useState([]); 
  const [taskInput, setTaskInput] = useState(""); 
  const [taskList, setTaskList] = useState([]); 
  const [isCardOpen, setIsCardOpen] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userName, setUserName] = useState(""); 
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false); 
  const [isSignUpFormVisible, setIsSignUpFormVisible] = useState(false); 
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
    setTasks([...tasks, taskList]);
    setTaskList([]); 
    setIsCardOpen(false); 
  };
  const editTask = (taskIndex, taskItemIndex, taskItem) => {
    const newTask = prompt("Edit Task", taskItem);
    if (newTask !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex][taskItemIndex] = newTask; 
      setTasks(updatedTasks); 
    }
  };
  const deleteTask = (taskIndex, taskItemIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].splice(taskItemIndex, 1);
    if (updatedTasks[taskIndex].length === 0) {
      updatedTasks.splice(taskIndex, 1); 
    }
    setTasks(updatedTasks); 
  };
  const handleLoginSuccess = (username) => {
    setUserName(username);
    setIsLoggedIn(true);
    setIsLoginFormVisible(false); 
  };
  const handleSignUpSuccess = (username) => {
    setUserName(username);
    setIsLoggedIn(true);
    setIsSignUpFormVisible(false); 
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <div className="app-container bg-gradient-to-r from-purple-200 via-purple-300 to-purple-800 h-screen">
      <NavBar
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogin={() => setIsLoginFormVisible(true)} 
        onSignUp={() => setIsSignUpFormVisible(true)} 
        onLogout={handleLogout} 
      />
      {!isCardOpen && !isLoginFormVisible && !isSignUpFormVisible && (
        <div className="text-center mt-16">
          <Text onGetStarted={() => setIsCardOpen(true)} />
        </div>
      )}
{isCardOpen && (
        <TaskFile
          taskInput={taskInput}
          handleInputChange={handleInputChange}
          addTaskToList={addTaskToList}
          addTasksToMainList={addTasksToMainList}
          taskList={taskList}
        />
      )}
{tasks.length > 0 && !isCardOpen && !isLoginFormVisible && !isSignUpFormVisible && (
        <div className="mt-6 flex flex-wrap gap-4">
          <ShortCard tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
        </div>
      )}
{isLoginFormVisible && (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
      {isSignUpFormVisible && (
        <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
      )}
    </div>
  );
};
export default App;
