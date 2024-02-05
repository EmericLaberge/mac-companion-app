
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
import { useEffect } from 'react';
import { toast } from 'react-toastify';


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
    let followingScript = "brew update";
    apps.forEach((app) => {
      if (app.isAdded && app.brewFormula.trim() !== "") {
        followingScript += ` ; ${app.brewFormula}`;
      }
    }
    );

    return followingScript;
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
      <Button variant="contained" color='success' className="mt-2" onClick={copyToClipboard}>Copy to Clipboard</Button>
    </div>
  );
};

export default Cart

