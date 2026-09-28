import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="intro">Hello, I'm</p>

        <h1>Mohmed Jindan</h1>

        <h2>Software Engineering Technology Student</h2>

        <p className="home-description">
          I am interested in software development, web development,
          programming, and artificial intelligence. I enjoy learning new
          technologies and building projects that improve my technical skills.
        </p>

        <p className="mission">
          My goal is to continue developing my skills and create useful,
          reliable, and user-friendly software solutions.
        </p>

        <div className="home-buttons">
          <Link to="/about" className="primary-btn">
            About Me
          </Link>

          <Link to="/projects" className="secondary-btn">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;