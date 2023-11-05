import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error connecting to API', error);
    }
  };

  const handleFetchUserData = async () => {
    try {
      const response = await fetch('/api/users', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User data:', data.users);
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error connecting to API', error);
    }
  }
  

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          เข้าสู่ระบบ
        </button>
        <button type="button" onClick={handleFetchUserData}>
          Fetch User Data
        </button>
      </form>
    </div>
  );
};

export default Login;
