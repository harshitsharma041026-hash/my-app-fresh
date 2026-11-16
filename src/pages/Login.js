
import { Link } from "react-router-dom";
import "../Login.css";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Demo screen only. Authentication is not connected.");
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <Link to="/" className="login-brand">
          NEXORA ACCOUNT
        </Link>

        <h1>Welcome back.</h1>
        <p className="login-subtitle">
          Sign-in UI for our demo project.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Sign In <span>→</span>
          </button>
        </form>

        <p className="login-note">
          Demo screen only. Authentication is not connected.
        </p>

        <Link to="/" className="back-link">
          ← Back to website
        </Link>
      </div>
    </main>
  );
}

export default Login;
