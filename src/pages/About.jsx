function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-image">
          <img src="/images/profile.jpg" alt="Mohmed Jindan" />
        </div>

        <div className="about-content">
          <p className="section-label">About Me</p>

          <h1>Mohmed Jindan</h1>

          <p>
            I am a Software Engineering Technology student interested in
            software development, web development, programming, and artificial
            intelligence.
          </p>

          <p>
            I enjoy learning new technologies, solving problems, and building
            projects that help me improve my technical and practical skills.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
          >
            View My Resume
          </a>
          
        </div>

      </div>
    </section>
  );
}

export default About;