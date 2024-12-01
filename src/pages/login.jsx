import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

// Export variable to store the email globally
export let userEmail = "";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(""); // To display login errors
  const [loading, setLoading] = useState(false); // Add loading state
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
    userEmail = enteredEmail; // Update exported variable

    // Extract and set the name
    const extractedName = extractName(enteredEmail);
    setName(extractedName);
  };

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await fetch("http://54.169.129.117:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      if (response.ok) {
        console.log("Login successful!");
        // Navigate to the appropriate page after a successful login
        navigate("/");
      } else {
        const errorText = await response.text();
        console.error("Error logging in:", errorText);
        setError(errorText); // Set error message
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while logging in. Please try again.");
    } finally {
      setLoading(false); // Stop loading
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
          <button
            type="submit"
            className={`form-button ${loading ? "loading" : ""}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Login"}
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
