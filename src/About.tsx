import { Typography } from "@mui/material";
import React from "react";
import NavBar from "./Components/Navbar/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <Typography variant="h2" className="text-center my-4">
       About Me 
      </Typography>
      <p id = "header-description">
        My name is <strong>Emeric</strong> and I'm a computer science student at
        the University of Montreal. I designed this website as a personal project
        to share tips, tricks, applications, and other modifications that allow
        you to get the most out of your MacBook, iMac, Mac mini, Mac Pro, and all
        other devices running MacOS. Even though I'm a computer science student,
        this site is intended for all Mac users, whether you're a beginner or an
        expert.
      </p>
      <br />
      <p>
        The site is constantly evolving, and I plan on adding new applications
        and tips regularly. If you have any suggestions or questions, feel free
        to contact me at the following email address:
        <a href="mailto:emericlaberge@gmail.com">
          <strong>emericlaberge@gmail.com</strong>
        </a>
      </p>
      <br />
      <p id="motDeFin">Thanks for visiting the site!</p>
    </div>
    );
  }

export default About;
