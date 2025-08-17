import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EducationalComponenets from "./EducationalComponenets";
import HygenieAdvice from "./HygenieAdvice";
import Videodemo from "./Videodemo";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Education</Link>
        <Link to="/hygiene" style={{ marginRight: "1rem" }}>Hygiene Advice</Link>
        <Link to="/video">Video Demo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<EducationalComponenets />} />
        <Route path="/hygiene" element={<HygenieAdvice />} />
        <Route path="/video" element={<Videodemo />} />
      </Routes>
    </Router>
  );
}

export default App;
