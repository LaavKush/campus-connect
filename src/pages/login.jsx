import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(""); // To display login errors
  const navigate = useNavigate();

  // Function to extract the name from the email
  const extractName = (email) => {
    const nameRegex = /^[a-z]+/i; // Match letters at the start of the string
    const match = email.match(nameRegex);
    return match ? match[0] : ""; // Return the name or an empty string
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Extract and set the name
    const extractedName = extractName(enteredEmail);
    setName(extractedName);
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Login payload
    const loginData = {
      email: email.trim(),
      password: password.trim(),
    };

    try {
      // API request to login endpoint
      const response = await fetch("https://your-backend-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);

        // Save token or user data in localStorage or context (if applicable)
        localStorage.setItem("token", data.token);

        // Redirect to the home page
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="form-title">Welcome Back</h2>
        <p className="form-subtitle">Log in to continue to your account</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="form-error">{error}</p>} {/* Display error */}
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
        <div className="form-footer">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="form-link">
              Sign up
            </a>
          </p>
        </div>
        {/* Display the extracted name */}
        {name && <p className="extracted-name">Extracted Name: {name}</p>}
      </div>
    </div>
  );
};

export default Login;
