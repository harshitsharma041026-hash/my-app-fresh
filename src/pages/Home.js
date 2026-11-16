
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">
            ● YOUR DIGITAL GROWTH PARTNER
          </span>

          <h1>
            We build digital
            <span> experiences that</span>
            <span className="gradient-text"> move business forward.</span>
          </h1>

          <p>
            From strategy to software, we help ambitious
            businesses transform bold ideas into meaningful
            digital products.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Let's Talk <span>↗</span>
            </Link>

            <Link to="/services" className="btn btn-outline">
              Explore Services →
            </Link>
          </div>

          <div className="trust-note">
            <span className="trust-dot"></span>
            Building smarter digital solutions for modern teams
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow"></div>

          <div className="visual-card main-visual-card">
            <div className="visual-top">
              <span className="visual-label">NEXORA STUDIO</span>
              <span className="visual-status">● LIVE</span>
            </div>

            <div className="visual-symbol">N.</div>

            <div className="visual-bottom">
              <div>
                <strong>Think bigger.</strong>
                <p>Build better digital products.</p>
              </div>
              <span className="visual-arrow">↗</span>
            </div>
          </div>

          <div className="floating-card floating-one">
            <span className="floating-icon">✦</span>
            <div>
              <strong>Creative thinking</strong>
              <p>Ideas into impact</p>
            </div>
          </div>

          <div className="floating-card floating-two">
            <span className="mini-check">✓</span>
            <div>
              <strong>Quality first</strong>
              <p>Built with purpose</p>
            </div>
          </div>
        </div>
      </section>

     <section className="process-section">
  <div className="process-container">
    <div className="process-step">
      <h2>01</h2>
      <p>Understand the challenge</p>
    </div>

    <div className="process-step">
      <h2>02</h2>
      <p>Design the solution</p>
    </div>

    <div className="process-step">
      <h2>03</h2>
      <p>Build for the future</p>
    </div>

    <div className="process-step">
      <h2>04</h2>
      <p>Improve and grow</p>
    </div>
  </div>
</section>

      <section className="home-services">
        <div className="section-heading">
          <span className="eyebrow">WHAT WE DO</span>
          <h2>Digital solutions, built around you.</h2>
          <p>Strategy, design and technology working together.</p>
        </div>

        <div className="service-preview-grid">
          <article className="preview-card">
            <span className="preview-number">01 / DEVELOPMENT</span>
            <div className="preview-icon">&lt;/&gt;</div>
            <h3>Web Development</h3>
            <p>Responsive, accessible and scalable digital experiences.</p>
          </article>

          <article className="preview-card">
            <span className="preview-number">02 / DESIGN</span>
            <div className="preview-icon">✳</div>
            <h3>UI/UX Design</h3>
            <p>Intuitive interfaces designed around real people.</p>
          </article>

          <article className="preview-card">
            <span className="preview-number">03 / STRATEGY</span>
            <div className="preview-icon">↗</div>
            <h3>Digital Strategy</h3>
            <p>Practical thinking to help your business move forward.</p>
          </article>
        </div>

        <Link to="/services" className="text-link">
          Discover all services →
        </Link>
      </section>

      <section className="home-cta">
        <div>
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let's create something meaningful.</h2>
          <p>Tell us about your idea and let's explore what's possible.</p>
        </div>
        <Link to="/contact" className="btn btn-light">
          Start a Conversation ↗
        </Link>
      </section>
    </div>
  );
}

export default Home;
