import { Link } from "react-router-dom";

function Resume() {
  return (
    <main className="resume-page">
      <div className="resume-container">

        <Link to="/" className="resume-back">
          ← Home
        </Link>

        <header className="resume-header">
          <div>
            <h1>Resume</h1>
          </div>

          <div className="resume-actions">
            <a
              href="/Michelle-Pham-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF ↗
            </a>

            <a
              href="/Michelle-Pham-Resume.pdf"
              download="Michelle-Pham-Resume.pdf"
            >
              Download ↓
            </a>
          </div>
        </header>

        <section className="resume-viewer">
          <iframe
            src="/Michelle-Pham-Resume.pdf"
            title="Michelle Pham Resume"
          />
        </section>

      </div>
    </main>
  );
}

export default Resume;