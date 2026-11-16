
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">ERROR 404</span>
      <h1>Page not found.</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Back to Home →</Link>
    </section>
  );
}

export default NotFound;
