import { atom } from "jotai";
import { useState } from "react";

export const AppsAtom = atom([
  {
    name: "Blender",
    description:
      "Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, virtual reality, and computer games.",
    image: require("./images/blender.ico"),
    link: "https://www.blender.org",
    brewFormula: " brew install --cask blender",
  },
  {
    name: "CheatSheet",
    description:
      "CheatSheet is a utility that displays all the keyboard shortcuts for the app you're using by holding down the Command key.",
    image: require("./images/cheatsheet.png"),
    link: "cheatsheet-app-link",
    brewFormula: " brew install --cask cheatsheet",
  },
  {
    name: "Flux",
    description:
      "Flux is a utility that adjusts the color temperature of your screen based on the time of day, reducing eye strain and improving sleep quality.",
    image: require("./images/flux.png"),
    link: "flux-app-link",
    brewFormula: " brew install --cask flux",
  },
  {
    name: "Gimp",
    description:
      "Gimp is a free and open-source image editing software that provides tools for retouching, photo manipulation, and graphic design.",
    image: require("./images/gimp.svg.png"),
    link: "gimp-app-link",
    brewFormula: " brew install --cask gimp",
  },
  {
    name: "Iterm 2",
    description:
      "iTerm2 is an advanced terminal emulator for macOS that replaces the default Terminal app. It provides a multitude of features and improvements, including split panes, hotkey windows, search, autocomplete, mouseless copy, and much more. With its extensive customization options and powerful features, iTerm2 is a must-have for developers, system administrators, and power users who want to take full advantage of the command line on macOS.",
    image: require("./images/iterm.png"),
    link: "https://iterm2.com",
    brewFormula: " brew install --cask iterm2",
  },
  {
    name: "Joplin",
    description:
      "An open-source, cross-platform note-taking and to-do application. It supports synchronization, encryption, and even Markdown formatting. Notes are organized in notebooks and can be searched, copied, tagged, and modified either from the applications directly or from your own text editor.",
    image: require("./images/joplin.png"),
    link: "https://joplinapp.org",
    brewFormula: " brew install --cask joplin",
  },
  {
    name: "Karabiner",
    description:
      "Karabiner (previously called KeyRemap4MacBook) is a very powerful keyboard remapper for Mac OS X. In addition to simple key remapping, it has special remapping modes like Emacs-mode, SandS-mode (Space and Shift). You can also create your own mappings with the powerful built-in language.",
    image: require("./images/karabiner.png"),
    link: "https://karabiner-elements.pqrs.org",
    brewFormula: " brew install --cask karabiner-elements",
  },
  {
    name: "Keyclu",
    description:
      "Keyclu is a utility that displays all the keyboard shortcuts for the app you're using by pressing shortly the Command key and holding it down, this is an alternative to CheatSheet and the activation prevents you from accidentally opening the app like CheatSheet does.",
    image: require("./images/keyclu.png"),
    link: "https://keycue.com",
    brewFormula: " brew install --cask keycue",
  },
  {
    name: "Maccy",
    description:
      "Maccy is a clipboard manager that allows you to access your previously copied items and paste them in again with just a few clicks or keyboard shortcuts.",
    image: require("./images/maccy.png"),
    link: "https://maccy.app",
    brewFormula: "brew install --cask maccy",
  },
  {
    name: "MonitorControl",
    description:
      "MonitorControl is a utility that allows you to control the brightness and volume of external monitors connected to your Mac.",
    image: require("./images/monitorcontrol.png"),
    link: "monitorcontrol-app-link",
    brewFormula: "brew install --cask monitorcontrol",
  },
  {
    name: "Numi",
    description:
      "Numi is a calculator app that allows you to perform calculations using natural language. It supports a wide range of mathematical operations, including basic arithmetic, trigonometry, logarithms, and more. It also has the ability to define variables and functions, making easier than the default Calculator app for performing more complex calculations and is an alternative to Wolfram Alpha or Python for quick calculations.",
    image: require("./images/numi.png"),
    link: "https://numi.app",
    brewFormula: "brew install --cask numi",
  },
  {
    name: "Obsidian",
    description:
      "Obsidian is a note-taking app that allows you to take notes using Markdown, organize your notes using tags, and create links between notes.",
    image: require("./images/obsidian.png.webp"),
    link: "https://obsidian.md",
    brewFormula: "brew install --cask obsidian",
  },
  {
    name: "Rectangle",
    description:
      "Move and resize windows on macOS with keyboard shortcuts. Rectangle is a window management app based on Spectacle, written in Swift.",
    image: require("./images/rectangle.png"),
    link: "https://rectangleapp.com",
    brewFormula: "brew install --cask rectangle",
  },
  {
    name: "Skim",
    description:
      "Skim is a lightweight, open-source PDF reader and note-taking application for macOS. It is designed with researchers and students in mind, offering advanced features such as PDF annotations, text highlighting, and note exporting. Skim also has an integrated search function, making it easy to find specific content within your documents. Its clean and user-friendly interface sets it apart from other PDF readers, allowing you to focus on the content of your PDFs without any distractions.",
    image: require("./images/skim.png"),
    link: "https://skim-app.sourceforge.io",
    brewFormula: "brew install --cask skim",
  },
  {
    name: "Stats",
    description:
      "Stats is a statistical software package that provides tools for data analysis, visualization, and modeling.",
    image: require("./images/stats.png"),
    link: "stats-app-link",
    brewFormula: "brew install --cask stats",
  },
  {
    name: "Thunderbird",
    description:
      "Thunderbird is a free and open-source email client, news client, RSS, and chat client developed by the Mozilla Foundation. The project strategy was modeled after that of the Mozilla Firefox web browser. It is installed by default on Ubuntu desktop systems.",
    image: require("./images/thunderbird.ico"),
    link: "https://www.thunderbird.net",
    brewFormula: "brew install --cask thunderbird",
  },
]);

// Array of strings that will be the brew formulas
export const DownloadScriptsAtom = atom(['']);
export const BrewScriptAtom = atom("brew update && brew upgrade && brew cleanup");
const orderedTwoColsApps = (apps: any) => {
  let leftCol = [];
  let rightCol = [];
  // make the apps alternate between two columns 
  // so that the apps are ordered in two columns
  // instead of one column
  for (let i = 0; i < apps.length; i++) {
    if (i % 2 === 0) {
      leftCol.push(apps[i]);
    }
    else {
      rightCol.push(apps[i]);
    }
  }
  return [leftCol, rightCol];
}

export const alternateAppsAtom = atom(orderedTwoColsApps(AppsAtom));

export const CartAmountAtom = atom(0);

// Define the searchQueryAtom
export const searchQueryAtom = atom("");
