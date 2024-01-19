
import React, { useState } from 'react';
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
        followingScript += `&& ${app.brewFormula}`;
      }
    }
    );

    return followingScript;
  }

  const copyToClipboard = () => {
    const brewScript = generateBrew();
    navigator.clipboard.writeText(brewScript).then(() => {
      alert("Copied to clipboard!");
    }
    );
  }


  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1 className="text-3xl text-white mb-5">Cart</h1>
      <CartList />
      <Button variant="contained" color='success' className="mt-5" onClick={copyToClipboard}>Copy to Clipboard</Button>
    </div>
  );
};

export default Cart

