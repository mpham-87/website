import { Link } from "react-router-dom";
import computer from "../assets/Computer.png";
import profile from "../assets/profile.png";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="computer-wrapper">
          <img
            src={computer}
            alt="Pixel art computer illustration"
            className="computer-image"
          />

          <img
            src={profile}
            alt="Michelle"
            className="profile-photo"
          />

          <div className="yellow-note">
            <span>Thank you</span>
            <span>for visiting </span>
            <span>(˶ᵔ ᵕ ᵔ˶)</span>
          </div>

          <div className="screen-content">
            <p className="hello">Hi, I'm</p>

            <h1>
              Michelle
              <br />
              Pham
            </h1>

            <p className="intro">
              I build thoughtful software
              <br />
              that makes complex problems
              <br />
              easier.
            </p>

            <nav className="screen-nav">
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;