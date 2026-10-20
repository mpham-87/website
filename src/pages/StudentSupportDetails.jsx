import { Link } from "react-router-dom";

function StudentSupportDetails() {
  return (
    <main className="project-detail-page">
      <div className="project-detail-container">
        <Link to="/projects" className="detail-back">
          ← Back to Projects
        </Link>

        <header className="detail-header">
          <p className="detail-label">PROJECT DETAILS</p>

          <h1>Student Support Predictor</h1>

          <p className="detail-intro">
            A machine learning application that analyzes student performance,
            study habits, and attendance to identify students who may need
            additional academic support.
          </p>

          <div className="detail-links">
            <a
              href="https://student-success-predictor-1.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/mpham-87/Student-success-predictor"
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
            Student Support Predictor is a machine learning project designed
            to identify students who may benefit from additional academic
            support. The model uses information related to student
            performance, study habits, attendance, and support resources to
            make predictions.
          </p>
        </section>

        <section className="detail-section">
          <h2>Problem / Goal</h2>

          <p>
            The goal of the project was to use student data to identify
            patterns associated with academic performance. By predicting which
            students may need additional support, the project demonstrates how
            machine learning can be used to assist with early intervention and
            student success.
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
            <span>GridSearchCV</span>
          </div>
        </section>

        <section className="detail-section">
          <h2>How It Works</h2>

          <ol>
            <li>
              Student information such as study time, absences, failures, and
              support-related features is provided to the application.
            </li>

            <li>
              Numeric and categorical features are prepared using a
              preprocessing pipeline.
            </li>

            <li>
              Missing values are handled and categorical variables are
              converted into a format the model can use.
            </li>

            <li>
              The processed data is passed to a Random Forest classifier.
            </li>

            <li>
              The model predicts whether the student may need additional
              academic support.
            </li>
          </ol>
        </section>

        <section className="detail-section">
          <h2>Key Features</h2>

          <ul>
            <li>Interactive student information inputs</li>
            <li>Numeric and categorical feature preprocessing</li>
            <li>Random Forest classification</li>
            <li>Model evaluation using multiple performance metrics</li>
            <li>Hyperparameter tuning using GridSearchCV</li>
            <li>Interactive Streamlit deployment</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>Model Evaluation</h2>

          <p>
            The model was evaluated using accuracy, precision, recall, F1
            score, and a confusion matrix. Cross-validation was also used to
            evaluate model performance across multiple subsets of the data.
          </p>
        </section>

        <section className="detail-section">
          <h2>Challenges</h2>

          <p>
            One challenge was preparing a dataset containing both numerical
            and categorical information. I used a preprocessing pipeline so
            each type of feature could be handled appropriately before being
            passed to the model.
          </p>

          <p>
            Another challenge was evaluating the model beyond accuracy alone.
            Using precision, recall, F1 score, and cross-validation provided a
            more complete understanding of how well the classifier performed.
          </p>
        </section>

        <section className="detail-section">
          <h2>What I Learned</h2>

          <p>
            This project strengthened my understanding of classification,
            feature preprocessing, machine learning pipelines, cross-validation,
            hyperparameter tuning, and model evaluation. It also gave me
            experience turning a trained machine learning model into an
            interactive application that users can test in the browser.
          </p>
        </section>
      </div>
    </main>
  );
}

export default StudentSupportDetails;