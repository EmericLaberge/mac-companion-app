
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import NavBar from './Components/Navbar/NavBar';
import AppCard from './Components/AppCard/AppCard';
import { useAtom } from 'jotai';
import { DownloadScriptsAtom, BrewScriptAtom } from './atoms';
import { alternateAppsAtom, AppsAtom } from './atoms';
import SearchBar from "material-ui-search-bar";
import CartList from './Components/CartList/Cartlist';
import Button from '@mui/material/Button';
import { CopyBlock, dracula } from 'react-code-blocks';

const Cart: React.FC = () => {
  const [formulaes] = useAtom(DownloadScriptsAtom)
  const [isGenerated, setIsGenerated] = useState(false);
  const [apps, setApps] = useAtom(AppsAtom);


  // make the list of apps alternate between left and right
  //
  const handleRemove = () => {
  }

  const handleAdd = () => {
  }


  const generateBrew = () => {
    // Keep only the apps that are added and have a brew formula  and keep only the brew formula
    let brewFormulaes = apps.filter((app) => app.isAdded && app.brewFormula.trim() !== "").map((app) => app.brewFormula);
    // Join the brew formulaes with a ; to make it a single command 
    let oneCommand = brewFormulaes.join(" ; ");
    oneCommand = "brew update ; " + oneCommand;
    console.log(oneCommand);
    return oneCommand;
  }

  const displayBrew = () => {
    let brewScript = generateBrew();
    // Add a line separation at the end of each ; to make it more readable 
    brewScript = brewScript.replace(/; /g, ";\n");
    return brewScript;
  }

  const copyToClipboard = () => {
    const brewScript = generateBrew();
    navigator.clipboard.writeText(brewScript).then(() => {
      alert("Copied to clipboard! \n\nYou can now paste it in your terminal to install the apps you have selected.")
    }
    );
  }


  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <Typography variant="h2" className="text-center my-4">
        Cart
      </Typography>
      <Typography variant="h6" className="my-2">
        Here you can find the list of apps you have selected. By clicking on the copy to clipboard button, you will be able to
        <strong> copy directly to your clipboard the command to install all the apps you have selected.</strong>
      </Typography>
      <Typography variant="h6" className="my-2">
        After you have copied the command, you can paste it in your terminal and press enter to install all the apps you have selected. If you don't have Homebrew installed, you can go to the terminal section to learn how to install it.
      </Typography>

      <CartList />
      <Button variant="contained" color='success' className="my-2" onClick={copyToClipboard}>Copy to Clipboard</Button>
      <CopyBlock
        text={displayBrew()}
        language={'bash'}
        showLineNumbers={false}
        theme={dracula}
      />
    </div>
  );
};

export default Cart

