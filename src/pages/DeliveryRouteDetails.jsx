import { Link } from "react-router-dom";

function DeliveryRouteDetails() {
  return (
    <main className="project-detail-page">
      <div className="project-detail-container">
        <Link to="/projects" className="detail-back">
          ← Back to Projects
        </Link>

        <header className="detail-header">
          <p className="detail-label">PROJECT DETAILS</p>

          <h1>Delivery Route Optimizer</h1>

          <p className="detail-intro">
            A delivery routing application that organizes packages, plans
            efficient truck routes, and tracks deliveries using custom data
            structures and routing logic.
          </p>

          <div className="detail-links">
            <a
              href="https://delivery-route-optimizer-1.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/mpham-87/Delivery-route-optimizer"
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
            Delivery Route Optimizer is a Python project that simulates a
            package delivery system. The application loads package and distance
            data, assigns packages to trucks, calculates delivery routes, and
            tracks package status throughout the simulation.
          </p>
        </section>

        <section className="detail-section">
          <h2>Problem / Goal</h2>

          <p>
            The goal of the project was to create an efficient delivery system
            capable of handling multiple packages, delivery constraints, and
            route decisions while keeping total travel distance as low as
            possible.
          </p>
        </section>

        <section className="detail-section">
          <h2>Tech Stack</h2>

          <div className="detail-tags">
            <span>Python</span>
            <span>Hash Tables</span>
            <span>Algorithms</span>
            <span>Data Structures</span>
            <span>CSV Data</span>
            <span>Streamlit</span>
          </div>
        </section>

        <section className="detail-section">
          <h2>How It Works</h2>

          <ol>
            <li>
              Package information and delivery-distance data are loaded from
              CSV files.
            </li>

            <li>
              Package records are stored in a custom hash table for efficient
              lookup and updates.
            </li>

            <li>
              Packages are assigned to trucks based on delivery requirements
              and scheduling constraints.
            </li>

            <li>
              The routing logic selects delivery destinations and updates each
              truck's mileage and current location.
            </li>

            <li>
              Package statuses are updated as trucks leave the hub and complete
              deliveries.
            </li>

            <li>
              Users can inspect delivery status and route information through
              the application.
            </li>
          </ol>
        </section>

        <section className="detail-section">
          <h2>Key Features</h2>

          <ul>
            <li>Custom hash table for package storage and lookup</li>
            <li>Package assignment across multiple delivery trucks</li>
            <li>Route and distance calculations</li>
            <li>Package delivery status tracking</li>
            <li>Truck mileage tracking</li>
            <li>Handling of delivery timing and package constraints</li>
            <li>Interactive Streamlit demonstration</li>
          </ul>
        </section>

        <section className="detail-section">
          <h2>Algorithm & Data Structures</h2>

          <p>
            A custom hash table is used to store package information and allow
            package records to be retrieved and updated efficiently. The route
            planning logic uses delivery-distance information to determine the
            next destination for each truck.
          </p>

          <p>
            This approach demonstrates how data structures and routing
            algorithms can work together to manage a real-world logistics
            problem.
          </p>
        </section>

        <section className="detail-section">
          <h2>Challenges</h2>

          <p>
            One challenge was coordinating package assignments with delivery
            restrictions, truck schedules, and route order. The system needed
            to account for package requirements while still producing a
            workable delivery schedule.
          </p>

          <p>
            Another challenge was keeping package status, truck location, and
            delivery times synchronized throughout the simulation.
          </p>
        </section>

        <section className="detail-section">
          <h2>What I Learned</h2>

          <p>
            This project strengthened my understanding of hash tables,
            algorithm design, routing logic, object-oriented programming, and
            working with structured data. It also helped me understand how
            software can model a real-world delivery system where multiple
            constraints need to be managed at the same time.
          </p>
        </section>
      </div>
    </main>
  );
}

export default DeliveryRouteDetails;