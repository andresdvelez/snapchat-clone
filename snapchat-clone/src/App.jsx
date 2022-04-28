import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Routes>
            <Route path="/preview" element={<Preview />} />
            <Route exact path="/" element={<WebcamCapture />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
