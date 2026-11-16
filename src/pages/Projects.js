
const projectList = [
  { name: "Website Redesign", status: "In progress" },
  { name: "Client Dashboard", status: "Planning" },
  { name: "Mobile Experience", status: "Review" }
];

function Projects() {
  return (
    <section className="dashboard-panel">
      <h2>Projects</h2>
      <p>Example project overview for the dashboard.</p>

      {projectList.map((project) => (
        <div className="project-row" key={project.name}>
          <strong>{project.name}</strong>
          <span>{project.status}</span>
        </div>
      ))}
    </section>
  );
}

export default Projects;
