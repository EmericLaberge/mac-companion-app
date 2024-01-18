import React from "react";
import "./AppCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import { DownloadScriptsAtom, CartAmountAtom } from "../../atoms";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TrashIcon from '@mui/icons-material/Delete';
import { useAtom, atom } from "jotai";
import { useState } from "react";

interface AppCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  brewFormula: string;
}
const AppCard = (props: AppCardProps) => {
  const { name, description, image, link, brewFormula } = props;
  const [brew, setBrew] = useAtom(DownloadScriptsAtom);
  const [cartNumber, setCartNumber] = useAtom(CartAmountAtom);
  const [appAdded, setAppAdded] = useState(false);
  const handleAdd = () => {
  // add the formula to the brew array
  if (brew.find((brewFormula) => brewFormula === brewFormula)) {
    // alert("Already in cart!");
  }
  else {
    const newBrew = brew;
    newBrew.push(brewFormula);
    setBrew(newBrew);
    setCartNumber(cartNumber + 1);
    setAppAdded(true);
    console.log(brew);
  }
}

const handleRemove = () => {
  // remove the formula from the brew array
    const newBrew = brew;
    newBrew.splice(brew.indexOf(brewFormula), 1);
    setBrew(newBrew);
    setCartNumber(cartNumber - 1);
    setAppAdded(false);
    console.log(brew);
}

  return (
<div className="align-center">
    <Card className="flex flex-row p-5 border border-lightgray rounded-lg item-center" style={{ 
    backgroundColor: "#1F2937", borderRadius: "16px"}}>
      <div className="flex flex-col items-center mr-5 border-r border-gray-600 pr-5">
        <h1 className="text-3xl text-white mb-5">{name}</h1>
        <img src={image} alt={`${name} App`} className="w-40 h-40 mb-5" />
      </div>
      <div className="flex flex-col justify-between items-start pl-5 flex-1">
        <div className="flex-1">
          <p className="text-lg text-white">{description}</p>
        </div>
        <div className="flex flex-row justify-between align-items-end w-full">
        <CardActions className="flex flex-row justify-between align-items-center w-full">
          <Button size="small" color="primary" href={link} target="_blank" rel="noopener noreferrer" variant="text" style={{color: "#FFFFFF"}}>
            Learn More
          </Button>

          
          {appAdded ? (
            <Button size="small" color="primary" rel="noopener noreferrer"
            variant="contained" className="float-right justify-around align-items-center p-2"
            style={{backgroundColor: "red", color: "#FFFFFF",borderRadius: "8px"}} 
            onClick={() => handleRemove()}>
              Remove 
              <TrashIcon />
            </Button>
          ) : (
            <Button size="small" color="primary" rel="noopener noreferrer"
            variant="contained"  className="float-right justify-around align-items-center p-2"
            style={{backgroundColor: "green", color: "#FFFFFF",borderRadius: "8px"}} 
            onClick={() => handleAdd()}>
              Add 
              <AddIcon />
            </Button>
          )}
        </CardActions>
        </div>
      </div>
    </Card>
    </div>
  );
}
export default AppCard;
