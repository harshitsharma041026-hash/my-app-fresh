
import { useState } from "react";
import "./Login.css";

function Login({ onLogin })  {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = (event) => {
  event.preventDefault();
  onLogin();
};

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          <span>O</span>
          <h2>OTP<span>Login</span></h2>
        </div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Please enter your details to sign in.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account? <a href="#signup">Sign up</a>
        </p>

        <div className="login-footer">
          Secure Login · OTP Protected
        </div>

      </div>

    </div>
  );
}

export default Login;
