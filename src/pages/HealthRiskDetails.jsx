import { Link } from "react-router-dom";

function HealthRiskDetails() {
  return (
    <main className="project-detail-page">
      <div className="project-detail-container">
        <Link to="/projects" className="detail-back">
          ← Back to Projects
        </Link>

        <header className="detail-header">
          <p className="detail-label">PROJECT DETAILS</p>

          <h1>Health Risk Predictor</h1>

          <p className="detail-intro">
            A machine learning application that predicts healthRiskScore
            from urban weather and air-quality features.
          </p>

          <div className="detail-links">
            <a
              href="https://health-risk-predictor-1.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/mpham-87/Health-risk-predictor"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </header>

        <section className="detail-section">
          <h2>Project Overview</h2>
          <p>
            Health Risk Predictor is a machine learning project that uses
            environmental data to estimate a health risk score. The project
            includes data preprocessing, model training, evaluation, and an
            interactive Streamlit application.
          </p>
        </section>

        <section className="detail-section">
          <h2>Problem / Goal</h2>
          <p>
            The goal of the project was to build a model that could identify
            patterns in weather and air-quality data and use those patterns to
            predict a healthRiskScore for new environmental conditions.
          </p>
        </section>

        <section className="detail-section">
          <h2>Tech Stack</h2>

          <div className="detail-tags">
            <span>Python</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
            <span>Random Forest</span>
            <span>Streamlit</span>
            <span>Joblib</span>
          </div>
        </section>

        <section className="detail-section">
          <h2>How It Works</h2>

          <ol>
            <li>The user enters environmental conditions in the Streamlit app.</li>
            <li>The input data is formatted for the trained model.</li>
            <li>The preprocessing pipeline prepares the features.</li>
            <li>The Random Forest model generates a predicted healthRiskScore.</li>
            <li>The prediction is displayed to the user.</li>
          </ol>
        </section>

        <section className="detail-section">
          <h2>Key Features</h2>

          <ul>
            <li>Interactive environmental input controls</li>
            <li>Machine learning prediction pipeline</li>
            <li>Random Forest regression model</li>
            <li>Saved model and feature metadata</li>
            <li>Deployed Streamlit interface</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>Challenges</h2>
          <p>
            One challenge was ensuring that the inputs collected through the
            Streamlit interface matched the features and format expected by the
            trained machine learning pipeline.
          </p>
        </section>

        <section className="detail-section">
          <h2>What I Learned</h2>
          <p>
            This project strengthened my understanding of machine learning
            pipelines, preprocessing, model evaluation, model persistence, and
            deploying a trained model through an interactive web application.
          </p>
        </section>
      </div>
    </main>
  );
}

export default HealthRiskDetails;