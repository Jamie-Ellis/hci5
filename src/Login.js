import React, { useState } from 'react';

const users = [
    {
      username: 'john',
      password: 'password123',
    },
    {
      username: 'jane',
      password: 'pass456',
    },
  ];
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      // Check if the entered username and password match any user
      const user = users.find((user) => user.username === username && user.password === password);

    // Check if the username and password are valid
    if (user) {
      // Call the onLogin callback to update the login status in the parent component
      onLogin();
    } else {
      // Display an error message
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h1>News Aggregator - Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required />
        <br />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
