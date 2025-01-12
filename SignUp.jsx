import React, { useState } from 'react';
const SignUpForm = ({ onSignUpSuccess }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUpSuccess(username);
  };

  return (
    <div className="signup-form ml-8 ">
      <h2 className="text-xl font-semibold mb-16">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-72 p-2 border border-gray-300 rounded-md"
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 p-2 border border-gray-300 rounded-md"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-72 p-2 border border-gray-300 rounded-md"
        />
        <br />
        <button
          type="submit"
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
