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
import NavBar from './Components/Navbar/NavBar';
const App: React.FC = () => (
  <Router basename="/mac-companion-app">
    <NavBar />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/ListOfApps" element={<ListOfApps />} />
      <Route path="/Setup" element={<Setup />} />
      <Route path="/Terminal" element={<Terminal />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </Router>
);

export default App;
