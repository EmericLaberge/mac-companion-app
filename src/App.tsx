// App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ListOfApps from './ListOfApps';
import Setup from './Setup';
import './App.css';
import Terminal from './Terminal';
const App: React.FC = () => (
  <Router>
    <nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListOfApps" element={<ListOfApps />} />
        <Route path="/Setup" element={<Setup />} />
        <Route path="/Terminal" element={<Terminal />} /> 
        <Route path="/About" element={<About />} />
      </Routes>
    </nav>
  </Router>
);

export default App;
