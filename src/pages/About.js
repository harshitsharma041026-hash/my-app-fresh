import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <span className="eyebrow">ABOUT NEXORA</span>
        <h1>Technology with purpose. <span>People at the center.</span></h1>
        <p>
          We bring strategy, thoughtful design and engineering
          together to solve meaningful business problems.
        </p>
      </section>

      <section className="about-story">
        <div className="story-mark">N.</div>
        <div>
          <span className="eyebrow">OUR APPROACH</span>
          <h2>Good technology starts with understanding people.</h2>
          <p>
            At Nexora, we believe digital products should make
            life easier, work smarter and create lasting value.
            We begin by understanding your goals, then work
            collaboratively to design and build the right solution.
          </p>
          <p>
            From the first conversation to the final delivery,
            our focus is on clear communication, thoughtful
            execution and continuous improvement.
          </p>
          <Link to="/contact" className="text-link">
            Work with us →
          </Link>
        </div>
      </section>

      <section className="values-grid">
        <article>
          <span>01</span>
          <h3>Clarity</h3>
          <p>We keep communication honest, simple and focused.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Craft</h3>
          <p>We care about the details behind every experience.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Partnership</h3>
          <p>We collaborate closely and build for lasting value.</p>
        </article>
      </section>
    </div>
  );
}

export default About;
