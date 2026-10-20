import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <div className="about-container">
        <Link to="/" className="about-back">
          ← Home
        </Link>

        <header className="about-header">

          <h1>About Me</h1>
        </header>

        <section className="about-content">
          <p>
            Hi, I'm Michelle! I'm a Computer Science student at Western
            Governors University with a background in nursing and healthcare
            case management.
          </p>

          <p>
            Before I started building software, I spent years working with it and questioning why it couldn't work better. Working with inefficient healthcare systems sparked my interest in software engineering. I realized I enjoyed finding ways to simplify processes and wanted to be the person building better solutions.
          </p>

          <p>
            What I enjoy most about programming is the combination of logic and creativity. I love building things from scratch, figuring out how they work, and creating something that makes people's lives a little easier. My experience in healthcare has also taught me to approach problems from the user's perspective, not just the technical side.
          </p>

          <p>
            Outside of coding, I enjoy crocheting, drawing pixel art, and sewing my own clothes. I've always liked making things with my hands and taking an idea and turning it into something real, whether it's a piece of clothing, a digital illustration, or a software project.
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;