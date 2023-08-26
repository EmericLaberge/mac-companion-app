// NavBar.tsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./NavBar.css";
const NavBar: React.FC = () => {
  const location = useLocation();

  const getLinkStyle = (path: string) => {
    return location.pathname === path ? { color: "#ff9900" } : { color: "#ffffff" };
  };

  return (
    <div className={"navbar"}>
      <ul id="menu">
        <li id="home">
          <NavLink to="/" style={getLinkStyle("/")}>
            Home
          </NavLink>
        </li>
        <li id="list-of-apps">
          <NavLink to="/ListOfApps" style={getLinkStyle("/ListOfApps")}>
            Apps
          </NavLink>
        </li>
        <li id="setup">
          <NavLink to="/Setup" style={getLinkStyle("/Setup")}>
            Setup
          </NavLink>
        </li>
        <li id="terminal">
          <NavLink to="/Terminal" style={getLinkStyle("/Terminal")}>
            Terminal
          </NavLink>
        </li>
        <li id="about">
          <NavLink to="/about" style={getLinkStyle("/about")}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;