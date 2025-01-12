const ShortCard = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {tasks.map((task, index) => (
        <div key={index} className="task-card w-64 bg-purple-100 p-4 rounded-lg shadow-md">
          {task.map((taskItem, taskIndex) => (
            <div key={taskIndex} className="task-item flex justify-between items-center">
              <p className="flex-grow text-xl font-medium"> 
                {taskItem}
              </p>
              <div className="flex space-x-3">
                <button className="text-blue-600 hover:text-blue-800 font-bold text-lg" onClick={() => onEdit(index, taskIndex, taskItem)} >
                  Edit</button>
                <button className="text-red-600 hover:text-red-800 font-bold text-lg" onClick={() => onDelete(index, taskIndex)}>Delete</button>
                 </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ShortCard;
