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

          <p>Before I started building software, I spent years working with it and questioning why it couldn't work better.</p>

          <p>
            My interest in software engineering actually started with
            frustration. While working in healthcare, I found myself using
            systems that often made simple tasks more complicated than they
            needed to be. I would catch myself thinking about how these
            processes could be improved, what could be automated, and how I
            would design things differently. Eventually, I realized I was more
            interested in improving the systems I worked with than continuing
            to work within them.
          </p>

          <p>
            That curiosity led me to pursue computer science, where I
            discovered how much I enjoy the logical and creative sides of
            programming. I like starting with a problem, breaking it down, and
            figuring out how to build something that makes life a little
            easier. There's something especially rewarding about creating a
            solution from scratch and seeing someone actually benefit from
            using it.
          </p>

          <p>
            My healthcare experience has also shaped the way I approach
            software development. Working directly with patients, providers,
            and other stakeholders taught me that a solution isn't necessarily
            a good one just because it works. It also needs to make sense to
            the people using it. I pay attention to small inefficiencies, ask
            questions to understand what people actually need, and think about
            how even minor improvements can make a meaningful difference.
          </p>

          <p>
            Today, I'm continuing to develop my skills through projects in
            machine learning, algorithms, and application development. I'm
            excited to bring together my technical knowledge and real-world
            experience to build software that's not only functional, but
            genuinely useful.
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;