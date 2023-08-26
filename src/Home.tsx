import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import "./App.css";
import AppCard from "./Components/AppCard/AppCard";
function HomePage() {
  return (
    <div>
      <NavBar />

       <h1 id="header-title">Welcome</h1>
       <p id = "header-description">
        Welcome to my website! This is the place where I share some of my favorite apps and tools for Mac. Whether you're a new
        Mac user or an advanced user, I'm sure you'll find something useful
        here. As a Mac user myself, I'm always on the lookout for great apps and
        tools that can help me be more productive and efficient. Over the years,
        I've discovered some real gems that have become an essential part of my
        workflow. On this website, I will share a list of my top picks and i
        will complement each choice with a brief description of why I love itI
        hope you find something useful here and that these apps and plugins help
        you get the most out of your MacBook. Happy browsing!
      </p>
      </div>
  );
}
export default HomePage;
