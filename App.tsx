import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EducationalComponenets from "./EducationalComponenets";
import HygenieAdvice from "./HygenieAdvice";
import Videodemo from "./Videodemo";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Education</Link></li>
          <li><Link to="/hygiene">Hygiene Advice</Link></li>
          <li><Link to="/video">Video Demo</Link></li>
        </ul>
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
