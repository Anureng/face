// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import WebcamDemo from './components/WebcamDemo';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/webcam">Webcam </Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webcam" element={<WebcamDemo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
