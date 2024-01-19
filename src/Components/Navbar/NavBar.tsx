// NavBar.tsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {  AppsAtom, DownloadScriptsAtom } from "../../atoms";
import "./NavBar.css";
import { useAtom } from "jotai";


const NavBar: React.FC = () => {
  const location = useLocation();

  const getLinkStyle = (path: string) => {
    return location.pathname === path ? { color: "#ff9900" } : { color: "#ffffff" };
  };


  const [fomulaes, setFormulas] = useAtom(DownloadScriptsAtom)
  const [apps, setApps] = useAtom(AppsAtom);
  const cartNum = apps.filter((app) => app.isAdded).length;

  return (
    <div className={"navbar"}>
      <ul id="menu">
        <li id="list-of-apps">
          <NavLink to="/" style={getLinkStyle("/")}>
            Apps
          </NavLink>
        </li>
        <li id="terminal">
          <NavLink to="/Terminal" style={getLinkStyle("/Terminal")}>
            Terminal
          </NavLink>
        </li>
        <li id="setup">
          <NavLink to="/Setup" style={getLinkStyle("/Setup")}>
            Setup
          </NavLink>
        </li>
        <li id="about">
          <NavLink to="/about" style={getLinkStyle("/about")}>
            About
          </NavLink>
        </li>
        <li id="cart">
        <NavLink to="/cart"
        style={getLinkStyle("/cart")}>
            Cart { cartNum > 0 ? `(${cartNum})` : '' }
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
