import { atom } from "jotai";
import { useState } from "react";

export const AppsAtom = atom([
// alt-tab
{
  name: "Alt-Tab",
  description: "Alt-Tab brings the power of Windows’s “alt-tab” window switcher to macOS.",
  image: require("./images/alttab_1024x1024x32.png"),
  link: "https://alt-tab-macos.netlify.app",
  brewFormula: "brew install --cask alt-tab",
  isAdded: false,
},

// appcleaner
{
  name: "AppCleaner",
  description: "AppCleaner is a small application that allows you to thoroughly uninstall unwanted apps.",
  image: require("./images/appcleaner_1024x1024x32.png"),
  link: "https://freemacsoft.net/appcleaner/",
  brewFormula: "brew install --cask appcleaner",
  isAdded: false,
},

// betterdisplay
{
  name: "BetterDisplay",
  description: "BetterDisplay offers advanced features for managing your displays, including better resolution options, rotation, mirroring, and more.",
  image: require("./images/betterdisplay.png"),
  link: "https://betterdisplay.app",
  brewFormula: "brew install --cask betterdisplay",
  isAdded: false,
},

// browserosaurus
{
  name: "Browserosaurus",
  description: "Browserosaurus is a macOS tool that prompts you to choose a browser when opening a link.",
  image: require("./images/browserrosaurus.png"),
  link: "https://browserosaurus.com",
  brewFormula: "brew install --cask browserosaurus",
  isAdded: false,
},

// cakebrew
{
  name: "Cakebrew",
  description: "Cakebrew is a GUI app for Homebrew, allowing you to manage your Homebrew installations with a graphical interface.",
  image: require("./images/cakebrew.webp"),
  link: "https://www.cakebrew.com",
  brewFormula: "brew install --cask cakebrew",
  isAdded: false,
},

// cemu
{
  name: "Cemu",
  description: "Cemu is a highly experimental software to emulate Wii U applications on your computer.",
  image: require("./images/cemu.png"),
  link: "http://cemu.info",
  brewFormula: "brew install --cask cemu",
  isAdded: false,
},

// cheatsheet
{
  name: "CheatSheet",
  description: "CheatSheet gives you access to shortcuts on your Mac with just a keystroke.",
  image: require("./images/cheatsheet.png"),
  link: "https://www.mediaatelier.com/CheatSheet/",
  brewFormula: "brew install --cask cheatsheet",
  isAdded: false,
},

// clean-me
{
  name: "Clean Me",
  description: "Clean Me is an open source system cleaner for MacOS.",
  image: require("./images/cleanme.webp"),
  link: "https://github.com/Kevin-De-Koninck/Clean-Me",
  brewFormula: "brew install --cask clean-me",
  isAdded: false,
},

// codeedit
{
  name: "CodeEdit",
  description: "CodeEdit is a code editor for macOS with features and integration specifically tailored for programming and development.",
  image: require("./images/c0380f8f6a7cfd143a51bbbe29ea59ef_6ZqbgbVaIi_1024x1024x32.png"),
  link: "https://codeedit.app",
  brewFormula: "brew install --cask codeedit",
  isAdded: false,
},

// command-x
{
  name: "Command-X",
  description: "Command-X provides quick access to your most frequently used actions, with a simple keystroke.",
  image: require("./images/cmdx.png"),
  link: "https://commandx.app",
  brewFormula: "brew install --cask command-x",
  isAdded: false,
},


// dbeaver-community
{
  name: "DBeaver Community",
  description: "DBeaver Community is a free, open-source universal database tool and SQL client.",
  image: require("./images/40cdcd961c2c749c12ca69c28b5216b2_DBeaver_1024x1024x32.png"),
  link: "https://dbeaver.io",
  brewFormula: "brew install --cask dbeaver-community",
  isAdded: false,
},

// detexify
{
  name: "Detexify",
  description: "Detexify is a LaTeX symbol classifier that helps you find the LaTeX command for the symbol you want.",
  image: require("./images/4771337.png"),
  link: "https://detexify.kirelabs.org/classify.html",
  brewFormula: "brew install --cask detexify",
  isAdded: false,
},

// discord
{
  name: "Discord",
  description: "Discord is a communication platform designed for creating communities ranging from gamers to education and businesses.",
  image: require("./images/disco.png"), 
  link: "https://discord.com",
  brewFormula: "brew install --cask discord",
  isAdded: false,
},

// disk-inventory-x
{
  name: "Disk Inventory X",
  description: "Disk Inventory X is a disk usage utility for macOS, visualizing the disk space on your computer.",
  image: require("./images/Disk_Inventory_X_logo.png"),
  link: "http://www.derlien.com",
  brewFormula: "brew install --cask disk-inventory-x",
  isAdded: false,
},

// docker
{
  name: "Docker",
  description: "Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers.",
  image: require("./images/docker.png"),
  link: "https://www.docker.com",
  brewFormula: "brew install --cask docker",
  isAdded: false,
},

// element
{
  name: "Element",
  description: "Element is a secure, private and decentralized communication app for teams and individuals, built on the Matrix protocol.",
  image: require("./images/element.png"),
  link: "https://element.io",
  brewFormula: "brew install --cask element",
  isAdded: false,
},

// espanso
{
  name: "Espanso",
  description: "Espanso is a cross-platform Text Expander written in Rust.",
  image: require("./images/espanso.png"),
  link: "https://espanso.org",
  brewFormula: "brew install --cask espanso",
  isAdded: false,
},

// firefox
{
  name: "Firefox",
  description: "Mozilla Firefox is a free and open-source web browser developed by the Mozilla Foundation.",
  image: require("./images/firefox.png"),
  link: "https://www.mozilla.org/en-US/firefox/",
  brewFormula: "brew install --cask firefox",
  isAdded: false,
},

{
  name: "Font Fira Code",
  description: "Fira Code is a free monospaced font containing ligatures for common programming multi-character combinations.",
  image: require("./images/4771337.png"),
  link: "https://github.com/tonsky/FiraCode",
  brewFormula: "brew install --cask font-fira-code",
  isAdded: false,
},


// freecad
{
  name: "FreeCAD",
  description: "FreeCAD is an open-source parametric 3D CAD modeler made primarily to design real-life objects of any size.",
  image: require("./images/freecad.png"),
  link: "https://www.freecadweb.org",
  brewFormula: "brew install --cask freecad",
  isAdded: false,
},


// iterm2
{
  name: "iTerm2",
  description: "iTerm2 is a replacement for Terminal and the successor to iTerm that brings the terminal into the modern age with features you never knew you always wanted.",
  image: require("./images/iterm.png"),
  link: "https://iterm2.com",
  brewFormula: "brew install --cask iterm2",
  isAdded: false,
},

// joplin
{
  name: "Joplin",
  description: "Joplin is an open-source note-taking and to-do application with synchronization capabilities.",
  image: require("./images/joplin.png"),
  link: "https://joplinapp.org",
  brewFormula: "brew install --cask joplin",
  isAdded: false,
},


// karabiner-elements
{
  name: "Karabiner Elements",
  description: "Karabiner Elements is a powerful and stable keyboard customizer for macOS.",
  image: require("./images/karabiner.png"),
  link: "https://karabiner-elements.pqrs.org",
  brewFormula: "brew install --cask karabiner-elements",
  isAdded: false,
},

// kicad
{
  name: "KiCad",
  description: "KiCad is an open-source software suite for electronic design automation (EDA).",
  image: require("./images/kicad_1024x1024x32.png"),
  link: "http://www.kicad-pcb.org",
  brewFormula: "brew install --cask kicad",
  isAdded: false,
},
// libreoffice
{
  name: "LibreOffice",
  description: "LibreOffice is a powerful office suite that provides a clean interface and tools that let you unleash your creativity and grow your productivity. It includes several applications that make it the most versatile Free and Open Source office suite on the market.",
  image: require("./images/libreoffice_1024x1024x32.png"),
  link: "https://www.libreoffice.org/",
  brewFormula: "brew install --cask libreoffice",
  isAdded: false,
},


// logseq
{
  name: "Logseq",
  description: "Logseq is a platform for knowledge management and collaboration, supporting task management, note-taking, and knowledge base building.",
  image: require("./images/logseq_1024x1024x32.png"),
  link: "https://logseq.com/",
  brewFormula: "brew install --cask logseq",
  isAdded: false,
},

// macfuse
{
  name: "MacFuse",
  description: "MacFuse allows you to extend macOS's native file handling capabilities via third-party file systems.",
  image: require("./images/fuse.png"),
  link: "https://osxfuse.github.io",
  brewFormula: "brew install --cask macfuse",
  isAdded: false,
},

// mactex
{
  name: "MacTeX",
  description: "MacTeX is a distribution of TeX Live, a typesetting environment for macOS.",
  image: require("./images/mactex.png"),
  link: "https://tug.org/mactex/",
  brewFormula: "brew install --cask mactex",
  isAdded: false,
},

// macvim
{
  name: "MacVim",
  description: "MacVim is a port of the text editor Vim to macOS.",
  image: require("./images/macvim.png"),
  link: "https://macvim-dev.github.io/macvim/",
  brewFormula: "brew install --cask macvim",
  isAdded: false,
},


// monitorcontrol
{
  name: "MonitorControl",
  description: "MonitorControl lets you control your external monitor brightness, contrast, or volume directly from a menu or with keyboard native keys.",
  image: require("./images/monitorcontrol.png"),
  link: "https://github.com/MonitorControl/MonitorControl",
  brewFormula: "brew install --cask monitorcontrol",
  isAdded: false,
},

// ngrok
{
  name: "Ngrok",
  description: "Ngrok exposes local servers behind NATs and firewalls to the public internet over secure tunnels.",
  image: require("./images/4771337.png"),
  link: "https://ngrok.com/",
  brewFormula: "brew install --cask ngrok",
  isAdded: false,
},

// nofwl
{
  name: "Nofwl",
  description: "Nofwl is a simple, yet powerful firewall app for macOS to block outgoing connections.",
  image: require("./images/nofwl.png"),
  link: "https://nofwl.com/",
  brewFormula: "brew install --cask nofwl",
  isAdded: false,
},

// obsidian
{
  name: "Obsidian",
  description: "Obsidian is a powerful knowledge base on top of a local folder of plain text Markdown files.",
  image: require("./images/obsidian.png.webp"),
  link: "https://obsidian.md/",
  brewFormula: "brew install --cask obsidian",
  isAdded: false,
},

// openinterminal
{
  name: "OpenInTerminal",
  description: "OpenInTerminal makes it easy to open the current Finder window (or selected folders/files) in Terminal, iTerm, or other custom terminals.",
  image: require("./images/openinterminal-logo.png"),
  link: "https://github.com/Ji4n1ng/OpenInTerminal",
  brewFormula: "brew install --cask openinterminal",
  isAdded: false,
},

// pdfsam-basic
{
  name: "PDFsam Basic",
  description: "PDFsam Basic is a free, open-source, multi-platform software designed to split, merge, extract pages, mix, and rotate PDF files.",
  image: require("./images/pdfsam.png"),
  link: "https://pdfsam.org/",
  brewFormula: "brew install --cask pdfsam-basic",
  isAdded: false,
},
// pictogram
{
  name: "Pictogram",
  description: "Pictogram is a free and open-source app that allows you to use pictograms and emoji on your Mac. It can be used to change the default icons of apps, folders, files, and much more. The icons wills be kept even if the app is updated which is not the case if you just change the icon via the info panel.",
  image: require("./images/pictogram.png"),
  link: "https://pictogramapp.com",
  brewFormula: "brew install --cask pictogram",
  isAdded: false,
},

// pomotroid
{
  name: "Pomotroid",
  description: "Pomotroid is a simple and configurable Pomodoro timer. It helps you to stay focused and manage your time effectively using the Pomodoro technique.",
  image: require("./images/pomotroid.png"),
  link: "https://splode.github.io/pomotroid",
  brewFormula: "brew install --cask pomotroid",
  isAdded: false,
},

// prusaslicer
{
  name: "PrusaSlicer",
  description: "PrusaSlicer is a 3D slicing software for 3D printers. It's based on the open-source project Slic3r and tailored for Prusa 3D printers, but it works well with many other printers too.",
  image: require("./images/prusa.png"),
  link: "https://www.prusa3d.com/prusaslicer/",
  brewFormula: "brew install --cask prusaslicer",
  isAdded: false,
},

// qmk-toolbox
{
  name: "QMK Toolbox",
  description: "QMK Toolbox is a tool that allows you to interface with your QMK firmware using a simple graphical interface.",
  image: require("./images/qmk.png"),
  link: "https://github.com/qmk/qmk_toolbox",
  brewFormula: "brew install --cask qmk-toolbox",
  isAdded: false,
},

// raspberry-pi-imager
{
  name: "Raspberry Pi Imager",
  description: "Raspberry Pi Imager is the official imaging utility for the Raspberry Pi Foundation, making it easier to install an operating system on your Raspberry Pi.",
  image: require("./images/rp.png"),
  link: "https://www.raspberrypi.org/software/",
  brewFormula: "brew install --cask raspberry-pi-imager",
  isAdded: false,
},


// rectangle
{
  name: "Rectangle",
  description: "Rectangle is a window management app for macOS based on Spectacle, written in Swift.",
  image: require("./images/rectangle.png"),
  link: "https://rectangleapp.com/",
  brewFormula: "brew install --cask rectangle",
  isAdded: false,
},

// skim
{
  name: "Skim",
  description: "Skim is a PDF reader and note-taker for macOS designed for research purposes. It allows you to read PDF files and make notes on them.",
  image: require("./images/skim.png"),
  link: "https://skim-app.sourceforge.io/",
  brewFormula: "brew install --cask skim",
  isAdded: false,
},


// spacedrive
{
  name: "Spacedrive",
  description: "Spacedrive is an integrated cloud storage system that brings all of your cloud files and accounts into one place for easy access and management.",
  image: require("./images/spacedrive.png"),
  link: "https://www.spacedrive.com/",
  brewFormula: "brew install --cask spacedrive",
  isAdded: false,
},

// thunderbird
{
  name: "Thunderbird",
  description: "Thunderbird is a free and open-source email, newsfeed, chat, and calendaring client, which is easy to set up and customize.",
  image: require("./images/thunderbird.ico"),
  link: "https://www.thunderbird.net/",
  brewFormula: "brew install --cask thunderbird",
  isAdded: false,
},
// tor-browser
{
  name: "Tor Browser",
  description: "Tor Browser is a web browser that anonymizes your web traffic using the Tor network, making it easy to protect your identity online.",
  image: require("./images/tor_browser_macos_bigsur_icon_189628.png"),
  link: "https://www.torproject.org",
  brewFormula: "brew install --cask tor-browser",
  isAdded: false,
},

// touch-portal
{
  name: "Touch Portal",
  description: "Touch Portal is a macro multi action remote control for your stream or other applications on your computer.",
  image: require("./images/touchportal.png"),
  link: "https://www.touch-portal.com",
  brewFormula: "brew install --cask touch-portal",
  isAdded: false,
},


// veracrypt
{
  name: "VeraCrypt",
  description: "VeraCrypt is a free open source disk encryption software for Windows, MacOS, and Linux.",
  image: require("./images/veracrypt.png"),
  link: "https://www.veracrypt.fr",
  brewFormula: "brew install --cask veracrypt",
  isAdded: false,
},
]);

// Array of strings that will be the brew formulas
export const DownloadScriptsAtom = atom<string[]>([]);
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
