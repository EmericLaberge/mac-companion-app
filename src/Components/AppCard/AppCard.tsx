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
import { DownloadScritpsAtom } from "../../atoms";
import IconButton from "@mui/material/IconButton";


interface AppCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
}
const AppCard = (props: AppCardProps) => {
  const { name, description, image, link } = props;

  return (
<div className="align-center">
    <Card className="flex flex-row p-5 border border-lightgray rounded-lg   item-center" style={{ 
    backgroundColor: "#1F2937", borderRadius: "16px"}}>
      <div className="flex flex-col items-center mr-5 border-r border-gray-600 pr-5">
        <h2 className="text-3xl text-white mb-5">{name}</h2>
        <img src={image} alt={`${name} App`} className="w-40 h-40 mb-5" />
      </div>
      <div className="flex flex-col justify-between items-start pl-5 flex-1">
        <div className="flex-1">
          <p className="text-lg text-white my-5">{description}</p>
        </div>
        <CardHeader>
        {name}
        </CardHeader>
        <CardActions className="flex full-width justify-end">
          <Button size="small" color="primary" href={link} target="_blank" rel="noopener noreferrer" variant="text" style={{color: "#FFFFFF"}}>
            Learn More
          </Button>
          <Button size="small" color="primary" href={link} rel="noopener noreferrer" 
          variant="contained"  
          style={{backgroundColor: "blue", color: "#FFFFFF",borderRadius: "8px"}}>
          Add to Cart
          </Button>
        </CardActions>
      </div>
    </Card>
    </div>
  );
}
export default AppCard;
