import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import HealthRiskDetails from "./pages/HealthRiskDetails";
import StudentSupportDetails from "./pages/StudentSupportDetails";
import DeliveryRouteDetails from "./pages/DeliveryRouteDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects/health-risk-predictor"
          element={<HealthRiskDetails />} />
        
        <Route
          path="/projects/student-support-predictor"
          element={<StudentSupportDetails />}
        />

        <Route
          path="/projects/delivery-route-optimizer"
          element={<DeliveryRouteDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;