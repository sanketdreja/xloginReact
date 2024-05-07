import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Define the correct username and password
  const correctUsername = "user";
  const correctPassword = "password";

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Validate the input fields
    if (username === correctUsername && password === correctPassword) {
      // Display welcome message if credentials are correct
      setMessage("Welcome, user!");
    } else {
      // Display invalid message if credentials are incorrect
      setMessage("Invalid username or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default Login;
