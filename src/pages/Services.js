
import { Link } from "react-router-dom";
import "./Services.css";

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Web Development",
    description:
      "Fast, responsive websites and web applications built with modern technologies."
  },
  {
    number: "02",
    icon: "✳",
    title: "UI/UX Design",
    description:
      "Clear user journeys, thoughtful interfaces and consistent design systems."
  },
  {
    number: "03",
    icon: "⌘",
    title: "Application Development",
    description:
      "Purpose-built digital tools designed around your business workflows."
  },
  {
    number: "04",
    icon: "↗",
    title: "Digital Consulting",
    description:
      "Technical guidance and practical roadmaps for your next stage of growth."
  },
  {
    number: "05",
    icon: "▤",
    title: "Business Dashboards",
    description:
      "Organized interfaces for managing data, teams and day-to-day operations."
  },
  {
    number: "06",
    icon: "◎",
    title: "Ongoing Support",
    description:
      "Continuous improvements, maintenance and help as your product evolves."
  }
];

function Services() {
  return (
    <div className="inner-page">
      <section className="page-hero">
        <span className="eyebrow">OUR CAPABILITIES</span>
        <h1>Everything you need to <span>move forward.</span></h1>
        <p>
          Practical digital services that turn business challenges
          into useful, well-crafted solutions.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top">
              <span>{service.number}</span>
              <span className="service-icon">{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to="/contact" className="card-link">
              Discuss your project ↗
            </Link>
          </article>
        ))}
      </section>

      <section className="home-cta">
        <div>
          <span className="eyebrow">LET'S WORK TOGETHER</span>
          <h2>Have a challenge to solve?</h2>
          <p>Let's find the right solution for your business.</p>
        </div>
        <Link to="/contact" className="btn btn-light">
          Contact Us ↗
        </Link>
      </section>
    </div>
  );
}

export default Services;
