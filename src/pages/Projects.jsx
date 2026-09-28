function Projects() {
  return (
    <section className="projects">
      <div className="projects-container">

        <p className="section-label">My Work</p>
        <h1>Projects</h1>

        <div className="projects-grid">

          <div className="project-card">
            <img
              src="/images/projects/java-project.png"
              alt="Java Singer Management Program"
              className="project-img"
            />

            <h2>Java Singer Management Program</h2>

            <p>
              A Java application created using object-oriented programming
              concepts such as classes, constructors, getters, and setters.
            </p>

            <p>
              <strong>Role:</strong> Developer
            </p>

            <p>
              <strong>Outcome:</strong> Improved my understanding of Java OOP
              and class design.
            </p>
          </div>

          <div className="project-card">
            <img
              src="/images/projects/dfs-project.png"
              alt="Depth First Search AI Project"
              className="project-img"
            />

            <h2>Depth First Search</h2>

            <p>
              A Python project that explores states and searches through
              directories using the Depth First Search algorithm.
            </p>

            <p>
              <strong>Role:</strong> Developer
            </p>

            <p>
              <strong>Outcome:</strong> Learned how search algorithms explore
              states and solve problems.
            </p>
          </div>

          <div className="project-card">
            <img
              src="/images/projects/portfolio-project.png"
              alt="Personal React Portfolio Website"
              className="project-img"
            />

            <h2>Personal Portfolio Website</h2>

            <p>
              A responsive portfolio website built using React, React Router,
              JSX, and CSS.
            </p>

            <p>
              <strong>Role:</strong> Designer and Developer
            </p>

            <p>
              <strong>Outcome:</strong> Developed practical experience creating
              a multi-page React application.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;