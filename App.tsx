import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DoctorQA from "./DoctorQA";
import Reproductivesystem from "./Reproductivesystem";
import EducationalComponents from "./EducationalComponenets";
import HygenieAdvice from "./HygenieAdvice";
import ProductComparison from "./ProductComparison";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/qa">Doctor Q&A</Link></li>
          <li><Link to="/repro">Reproductive System</Link></li>
          <li><Link to="/education">Educational</Link></li>
          <li><Link to="/hygiene">Hygiene Advice</Link></li>
          <li><Link to="/comparison">Product Comparison</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to Girl Scouts Project</h1>} />
        <Route path="/qa" element={<DoctorQA />} />
        <Route path="/repro" element={<Reproductivesystem />} />
        <Route path="/education" element={<EducationalComponents />} />
        <Route path="/hygiene" element={<HygenieAdvice />} />
        <Route path="/comparison" element={<ProductComparison />} />
      </Routes>
    </Router>
  );
}

export default App;
