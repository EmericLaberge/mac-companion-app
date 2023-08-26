import { atom } from "jotai";
export const appsAtom = atom([
  {
    name: "Alfred",
    description:
      "Alfred is an award-winning app for macOS which boosts your efficiency with hotkeys, keywords, text expansion and more. Search your Mac and the web, and control your Mac using custom actions with the Powerpack.",
    image: require("./images/alfred.png"),
    link: "https://www.alfredapp.com",
  },
  {
    name: "Blender",
    description:
      "Blender is a free and open-source 3D computer graphics software toolset used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, virtual reality, and computer games.",
    image: require("./images/blender.ico"),
    link: "https://www.blender.org",
  },
  {
    name: "CheatSheet",
    description:
      "CheatSheet is a utility that displays all the keyboard shortcuts for the app you're using by holding down the Command key.",
    image: require("./images/cheatsheet.png"),
    link: "cheatsheet-app-link",
  },
  {
    name: "Darkreader for Safari",
    description:
      "Darkreader for Safari is a browser extension that enables you to apply dark mode to websites that don't have a built-in dark mode.",
    image: require("./images/darkreader.png"),
    link: "darkreader-app-link",
  },
  {
    name: "Flux",
    description:
      "Flux is a utility that adjusts the color temperature of your screen based on the time of day, reducing eye strain and improving sleep quality.",
    image: require("./images/flux.png"),
    link: "flux-app-link",
  },
  {
    name: "Gimp",
    description:
      "Gimp is a free and open-source image editing software that provides tools for retouching, photo manipulation, and graphic design.",
    image: require("./images/gimp.svg.png"),
    link: "gimp-app-link",
  },
  {
    name: "GoodNotes",
    description:
      "GoodNotes is a note-taking app that allows you to take handwritten notes, annotate PDFs, and organize your notes using notebooks and tags.",
    image: require("./images/goodnotes.png"),
    link: "goodnotes-app-link",
  },
  {
    name: "Iterm 2",
    description:
      "iTerm2 is an advanced terminal emulator for macOS that replaces the default Terminal app. It provides a multitude of features and improvements, including split panes, hotkey windows, search, autocomplete, mouseless copy, and much more. With its extensive customization options and powerful features, iTerm2 is a must-have for developers, system administrators, and power users who want to take full advantage of the command line on macOS.",
    image: require("./images/iterm.png"),
    link: "https://iterm2.com",
  },
  {
    name: "Joplin",
    description:
      "An open-source, cross-platform note-taking and to-do application. It supports synchronization, encryption, and even Markdown formatting. Notes are organized in notebooks and can be searched, copied, tagged, and modified either from the applications directly or from your own text editor.",
    image: require("./images/joplin.png"),
    link: "https://joplinapp.org",
  },
  {
    name: "Karabiner",
    description:
      "Karabiner (previously called KeyRemap4MacBook) is a very powerful keyboard remapper for Mac OS X. In addition to simple key remapping, it has special remapping modes like Emacs-mode, SandS-mode (Space and Shift). You can also create your own mappings with the powerful built-in language.",
    image: require("./images/karabiner.png"),
    link: "https://karabiner-elements.pqrs.org",
  },
  {
    name: "Maccy",
    description:
      "Maccy is a clipboard manager that allows you to access your previously copied items and paste them in again with just a few clicks or keyboard shortcuts.",
    image: require("./images/maccy.png"),
    link: "https://maccy.app",
  },
  {
    name: "Magnet",
    description:
      "Every time you want to copy content from one app to the other, compare files side by side or multitask in any other way, you need all the windows arranged accordingly. Magnet makes this process clean and simple. In just one drag to the edge, you snap any window into left, right, top or bottom half of your screen. And by dragging windows to the corners, you snap them into quarters. Taking advantage of such arrangements eliminates app switching and greatly enhances workspace efficiency.",
    image: require("./images/magnet.png"),
    link: "https://magnet.crowdcafe.com",
  },
  {
    name: "Mathematica",
    description:
      "Mathematica is a computational software program that allows you to perform symbolic and numeric computations, visualize data, develop algorithms, and create models.",
    image: require("./images/mathematica.png"),
    link: "mathematica-app-link",
  },
  {
    name: "MonitorControl",
    description:
      "MonitorControl is a utility that allows you to control the brightness and volume of external monitors connected to your Mac.",
    image: require("./images/monitorcontrol.png"),
    link: "monitorcontrol-app-link",
  },
  {
    name: "Notion",
    description:
      "Notion is an all-in-one productivity app that combines note-taking, task management, databases, and more. It provides a highly customizable workspace, allowing you to create your own systems for managing projects, ideas, and information. Notion's flexibility makes it suitable for individuals, teams, and even entire organizations looking to centralize their work in one powerful tool.",
    image: require("./images/notion.png"),
    link: "https://www.notion.so",
  },
  {
    name: "Numi",
    description:
      "Numi is a calculator app that allows you to perform calculations using natural language. It supports a wide range of mathematical operations, including basic arithmetic, trigonometry, logarithms, and more. It also has the ability to define variables and functions, making easier than the default Calculator app for performing more complex calculations and is an alternative to Wolfram Alpha or Python for quick calculations.",
    image: require("./images/numi.png"),
    link: "https://numi.app",
  },
  {
    name: "Obsidian",
    description:
      "Obsidian is a note-taking app that allows you to take notes using Markdown, organize your notes using tags, and create links between notes.",
    image: require("./images/obsidian.png.webp"),
    link: "https://obsidian.md",
  },
  {
    name: "Rectangle",
    description:
      "Move and resize windows on macOS with keyboard shortcuts. Rectangle is a window management app based on Spectacle, written in Swift.",
    image: require("./images/rectangle.png"),
    link: "https://rectangleapp.com",
  },
  {
    name: "Skim",
    description:
      "Skim is a lightweight, open-source PDF reader and note-taking application for macOS. It is designed with researchers and students in mind, offering advanced features such as PDF annotations, text highlighting, and note exporting. Skim also has an integrated search function, making it easy to find specific content within your documents. Its clean and user-friendly interface sets it apart from other PDF readers, allowing you to focus on the content of your PDFs without any distractions.",
    image: require("./images/skim.png"),
    link: "https://skim-app.sourceforge.io",
  },
  {
    name: "Spectacle",
    description:
      "Spectacle is a simple utility that allows you to easily organize your windows without using a mouse. Those familiar with similar apps will find Spectacle to be a simple and unobtrusive way to become more productive while using your Mac. ",
    image: require("./images/spectacle.png"),
    link: "https://www.spectacleapp.com",
  },
  {
    name: "Stats",
    description:
      "Stats is a statistical software package that provides tools for data analysis, visualization, and modeling.",
    image: require("./images/stats.png"),
    link: "stats-app-link",
  },
  {
    name: "Thunderbird",
    description:
      "Thunderbird is a free and open-source email client, news client, RSS, and chat client developed by the Mozilla Foundation. The project strategy was modeled after that of the Mozilla Firefox web browser. It is installed by default on Ubuntu desktop systems.",
    image: require("./images/thunderbird.ico"),
    link: "https://www.thunderbird.net",
  },
  {
    name: "Vimari",
    description:
      "Vimari is a Safari extension that provides Vim-style keyboard shortcuts for navigation and control in the spirit of Vimium for Chrome. It is a useful tool for those who prefer to use keyboard shortcuts over mouse clicks. And it's free!",
    image: require("./images/vimari.png"),
    link: " https://github.com/televator-apps/vimari",
  },
]);

// Define the searchQueryAtom
export const searchQueryAtom = atom("");
