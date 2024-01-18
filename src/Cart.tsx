
import React, { useState } from 'react';
import NavBar from './Components/Navbar/NavBar';
import AppCard from './Components/AppCard/AppCard';
import { useAtom } from 'jotai';
import { DownloadScriptsAtom, BrewScriptAtom } from './atoms';
import { alternateAppsAtom, AppsAtom } from './atoms';
import SearchBar from "material-ui-search-bar";
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import {toast} from 'react-toastify';


const Cart: React.FC = () => {
  const [formulaes] = useAtom(DownloadScriptsAtom)
  const [brewScript, setBrewScript] = useAtom(BrewScriptAtom)
  const [isGenerated, setIsGenerated] = useState(false);


  // make the list of apps alternate between left and right
  //
  const handleRemove = () => {
  }

  const handleAdd = () => {
  }

  useEffect(() => {
    console.log("formulaes: " + formulaes);
    console.log("brewScript: " + brewScript);
  }, [formulaes, brewScript])

const generateBrew = (callback: (newBrewScript: string) => void) => {
  if (!isGenerated) {
    let followingScript = "";
    console.log("formulaes: " + formulaes);
    formulaes.forEach((formula) => {
      formula.trim() === "" ? console.log("formula: " + formula) : followingScript += ` && ${formula}`;
    });
    setBrewScript(prevScript => {
      const newScript = prevScript + followingScript;
      callback(newScript); // Call the callback with the new script
      return newScript;
    });
  }
  setIsGenerated(true);
}

const copyToClipboard = () => {
  generateBrew((newBrewScript) => {
    navigator.clipboard.writeText(newBrewScript);
    alert("Copied to Clipboard!");
    // toast isnt visible for some reason
    toast.success("Copied to Clipboard!");
  });
}


  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <h1 className="text-3xl text-white mb-5">Cart</h1>
      <Button variant="contained" className="mb-5" onClick={() => {
        generateBrew((newBrewScript) => {
          toast.success("Generated Brew Script!");
        });
      }}>Generate Brew Script</Button>
      <Button variant="contained" onClick={copyToClipboard}>Copy to Clipboard</Button>
    </div>
  );
};

export default Cart

