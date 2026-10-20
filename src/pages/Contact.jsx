import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <Link to="/" className="contact-back">
          ← Home
        </Link>

        <header className="contact-header">
          <p className="contact-label">CONTACT</p>

          <h1>Let's Connect</h1>

          <p className="contact-intro">
            I'm always open to connecting about software engineering,
            technology, or opportunities to build useful products.
          </p>
        </header>

        <section className="contact-links">
          <a
            href="mailto:YOUR_EMAIL_HERE"
            className="contact-item"
          >
            <div>
              <p className="contact-type">Email</p>
              <h2>Mpham@wgu.edu</h2>
            </div>

            <span>↗</span>
          </a>

          <a
            href="https://github.com/mpham-87"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div>
              <p className="contact-type">GitHub</p>
              <h2>github.com/mpham-87</h2>
            </div>

            <span>↗</span>
          </a>

          <a
            href="https://linkedin.com/in/michelle-pham6 "
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <div>
              <p className="contact-type">LinkedIn</p>
              <h2>linkedin.com/in/michelle-pham6</h2>
            </div>

            <span>↗</span>
          </a>
        </section>
      </div>
    </main>
  );
}

export default Contact;