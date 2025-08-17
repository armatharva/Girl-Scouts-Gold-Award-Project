import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EducationalComponenets from "./EducationalComponenets";
import HygenieAdvice from "./HygenieAdvice";
import Videodemo from "./Videodemo";
import DoctorQA from "./DoctorQA";
import Reproductivesystem from "./Reproductivesystem";
import ProductComparison from "./ProductComparison";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Education</Link>
        <Link to="/hygiene" style={{ marginRight: "1rem" }}>Hygiene Advice</Link>
        <Link to="/video" style={{ marginRight: "1rem" }}>Video Demo</Link>
        <Link to="/qa" style={{ marginRight: "1rem" }}>Doctor Q&A</Link>
        <Link to="/reproductive" style={{ marginRight: "1rem" }}>Reproductive System</Link>
        <Link to="/comparison">Product Comparison</Link>
      </nav>

      <Routes>
        <Route path="/" element={<EducationalComponenets />} />
        <Route path="/hygiene" element={<HygenieAdvice />} />
        <Route path="/video" element={<Videodemo />} />
        <Route path="/qa" element={<DoctorQA />} />
        <Route path="/reproductive" element={<Reproductivesystem />} />
        <Route path="/comparison" element={<ProductComparison />} />
      </Routes>
    </Router>
  );
}

export default App;
