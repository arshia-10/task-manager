import React from 'react';
const Text = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 text-center">
      <h1 className="text-3xl font-semibold mb-4">
        Build your work’s foundation with tasks
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mb-6">
         Organize your tasks, track your progress, and complete your work in an efficient way. 
        Our task manager helps you stay on top of your responsibilities, providing a simple yet effective tool to prioritize and achieve your goals.
      </p>
      <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
};
export default Text;
