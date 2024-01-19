// App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import ListOfApps from './ListOfApps';
import Setup from './Setup';
import Cart from './Cart';
import './App.css';
import Terminal from './Terminal';
import NavBar from './Components/Navbar/NavBar';

const App: React.FC = () => (
  <Router>
    <NavBar />
    <Routes>

      <Route path="/" element={<ListOfApps />} />
      <Route path="/Setup" element={<Setup />} />
      <Route path="/Terminal" element={<Terminal />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cart" element={<Cart />} />
    </Routes>
  </Router>
);

export default App;
