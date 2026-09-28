function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <p className="section-label">What I Can Do</p>
        <h1>Services</h1>

        <div className="services-grid">

          <div className="service-card">
            <h2>Web Development</h2>
            <p>
              I can build responsive and user-friendly websites using
              HTML, CSS, JavaScript, and React.
            </p>
          </div>

          <div className="service-card">
            <h2>Java Programming</h2>
            <p>
              I can create Java applications using object-oriented
              programming concepts such as classes, constructors,
              methods, getters, and setters.
            </p>
          </div>

          <div className="service-card">
            <h2>Python & AI</h2>
            <p>
              I am learning Python and artificial intelligence concepts
              including search algorithms such as Depth First Search.
            </p>
          </div>

          <div className="service-card">
            <h2>Frontend Development</h2>
            <p>
              I can create clean and responsive user interfaces using
              React, JSX, and CSS.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;