import React, { useState } from 'react';
const NavBar = ({ setMenuOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const handleLogin = () => {
    setIsLoggedIn(true);};
const handleLogout = () => {
    setIsLoggedIn(false);};
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuOpen(!isMenuOpen);};
return (
    <nav className="bg-white text-gray-800 p-4 shadow-md h-16 rounded-lg mx-auto w-full max-w-5xl mt-2">
<div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-purple-800">Task Manager</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
<div className="hidden md:flex space-x-4 md:space-x-8 md:items-center">
          <a href="#tasks" className="text-purple-600 text-lg">Tasks</a>
          <a href="#completed-tasks" className="text-purple-600 text-lg">Completed Tasks</a>
          <a href="#about" className="text-purple-600 text-lg">About</a>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Logout
            </button>
          ) : (
            <button onClick={handleLogin} className="bg-white-500 text-purple px-4 py-2 rounded-lg hover:bg-purple-600 border px-4 py-2 border-purple-500 hover:border-black-500">
              Login
            </button>
          )}
        </div>
      </div>
{isMenuOpen && (
        <div className="md:hidden block mt-4 space-y-4 px-4">
          <a href="#tasks" className="block hover:text-purple-600">Tasks</a>
          <a href="#completed-tasks" className="block hover:text-purple-600">Completed Tasks</a>
          <a href="#about" className="block hover:text-purple-600">About</a>
  {isLoggedIn ? (
            <button onClick={handleLogout} className="block w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Logout
            </button>
          ) : (
            <button onClick={handleLogin} className="block w-full bg-purple-500 text-purple px-4 py-2 rounded-lg hover:bg-purple-600">
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
export default NavBar;
