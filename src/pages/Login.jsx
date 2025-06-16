import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS 

const predefinedUsers = [
  { username: 'admin', password: '1234' },
  { username: 'user1', password: 'password' },
  { username: 'guest', password: 'guest123' }
];

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const isValidUser = predefinedUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      localStorage.setItem('loggedInUser', username);
      navigate('/home');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <p>Enter your username and password to log in.</p>

      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>
      </form>

      {message && <p className="error-message">{message}</p>}
    </div>
  );
}
