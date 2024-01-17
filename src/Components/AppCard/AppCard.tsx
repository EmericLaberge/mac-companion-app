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
    // <div className="flex flex-row p-5 border border-lightgray rounded-md mx-10 mt-5"> 
    //   <div className="flex flex-col items-center mr-5 border-r border-gray-600 pr-5"> 
    //     <h2 className="text-3xl text-white mb-5">{name}</h2> 
    //     <img src={image} alt={`${name} App`} className="w-40 h-40 mb-5" /> 
    //   </div>
    //   <div className="flex flex-col justify-between items-start pl-5 flex-1"> 
    //     <div className="flex-1">
    //       <p className="text-lg text-white my-5">{description}</p>
    //     </div>
    //     <a href={link} className="text-lg text-lightgray no-underline border border-gray-600 rounded-md px-5 py-2.5 
    //     mt-2.5 hover:bg-gray-800 hover:text-white align-self-end
    //     " target="_blank" rel="noopener noreferrer">
    //       Download {name}
    //     </a> 
    //   </div>
    // </div>

<div className="align-center">
    <Card className="flex flex-row p-5 border border-lightgray rounded-lg mx-10 mt-5 item-center" style={{ 
    backgroundColor: "#1F2937", borderRadius: "16px", width: "50%"}}>
      <div className="flex flex-col items-center mr-5 border-r border-gray-600 pr-5">
        <h2 className="text-3xl text-white mb-5">{name}</h2>
        <img src={image} alt={`${name} App`} className="w-40 h-40 mb-5" />
      </div>
      <div className="flex flex-col justify-between items-start pl-5 flex-1">
        <div className="flex-1">
          <p className="text-lg text-white my-5">{description}</p>
        </div>
        <CardActions className="flex full-width justify-end">
          <Button size="small" color="primary" href={link} target="_blank" rel="noopener noreferrer" className="hover:bg-gray-800 hover:text-white">
            Download {name}
          </Button>
          <Button size="small" color="primary" href={link} target="_blank" rel="noopener noreferrer">
            Add {name} to cart
          </Button>
        </CardActions>
      </div>
    </Card>
    </div>
  );
}
export default AppCard;
