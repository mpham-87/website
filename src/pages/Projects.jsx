import { Link } from "react-router-dom";

import healthIcon from "../assets/Health predictor.png";
import studentIcon from "../assets/Student predictor.png";
import routeIcon from "../assets/Route optimizer.png";

import HealthRiskDetails from "../pages/HealthRiskDetails";
import StudentSupportDetails from "../pages/StudentSupportDetails";
import DeliveryRouteDetails from "../pages/DeliveryRouteDetails";

function Projects() {
  const projects = [
    {
      title: "Health Risk Predictor",
      image: healthIcon,
      description:
        "Predicts healthRiskScore from urban weather and air-quality features using machine learning.",
      tags: ["Python", "Scikit-learn", "Random Forest", "Streamlit"],
      demo: "https://health-risk-predictor-1.streamlit.app/",
      github: "https://github.com/mpham-87/Health-risk-predictor",
      details: "/projects/health-risk-predictor",
    },
    {
      title: "Student Support Predictor",
      image: studentIcon,
      description:
        "Predicts student academic performance to identify students who may need additional support.",
      tags: ["Python", "Machine Learning", "Streamlit", "Pandas"],
      demo: "https://student-success-predictor-1.streamlit.app/",
      github: "https://github.com/mpham-87/Student-success-predictor",
      details: "/projects/student-support-predictor",
    },
    {
      title: "Delivery Route Optimizer",
      image: routeIcon,
      description:
        "Optimizes delivery routes and schedules using custom data structures and routing algorithms.",
      tags: ["Python", "Hash Tables", "Algorithms", "Data Structures"],
      demo: "https://delivery-route-optimizer-1.streamlit.app/",
      github: "https://github.com/mpham-87/Delivery-route-optimizer",
      details: "/projects/delivery-route-optimizer",
    },
  ];

  return (
    <main className="projects-page">
      <div className="projects-container">
        <div className="projects-top">
          <Link to="/" className="projects-home-link">
            ← Home
          </Link>

          <p className="projects-label">PROJECTS</p>
        </div>

        <section className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image-wrapper">
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.title} illustration`}
                    className="project-image"
                  />
                </div>
              </div>

              <h2>{project.title}</h2>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>

                <Link to={project.details}>
                  View Details →
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Projects;