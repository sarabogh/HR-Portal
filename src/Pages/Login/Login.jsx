import React, { useState } from "react";
import './Login.css';

function Login({ setIsLoggedIn }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (credentials.username === "admin" && credentials.password === "1234") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Incorrect username or password.\nHint: Username: admin | Password: 1234");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input 
          type="text" 
          placeholder="Username"
          name="username"
          value={credentials.username} 
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder="Password"
          name="password"
          value={credentials.password} 
          onChange={handleChange}
        />
        <button type="submit">Login</button>

        <p className="login-note">
          <strong>Test Login:</strong><br />
          Username: <span>admin</span><br />
          Password: <span>1234</span>
        </p>
      </form>
    </div>
  );
}

export default Login;