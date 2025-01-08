import React from 'react';
const ShortCard = ({ tasks }) => {
  return (
    <div className="short-card-container">
      {tasks.map((task, index) => (
        <div key={index} className="short-card">
          <h3>Task {index + 1}</h3>
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
};
export default ShortCard;
