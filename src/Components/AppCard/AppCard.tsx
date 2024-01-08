import React from "react";
import "./AppCard.css";

interface AppCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
}
const AppCard = (props: AppCardProps) => {
const { name, description, image, link } = props;

  return (
    <div className="flex flex-row p-5 border border-lightgray rounded-md mx-10 mt-5"> 
      <div className="flex flex-col items-center mr-5 border-r border-gray-600 pr-5"> 
        <h2 className="text-3xl text-white mb-5">{name}</h2> 
        <img src={image} alt={`${name} App`} className="w-40 h-40 mb-5" /> 
      </div>
      <div className="flex flex-col justify-between items-start pl-5 flex-1"> 
        <div className="flex-1">
          <p className="text-lg text-white my-5">{description}</p>
        </div>
        <a href={link} className="text-lg text-lightgray no-underline border border-gray-600 rounded-md px-5 py-2.5 
        mt-2.5 hover:bg-gray-800 hover:text-white align-self-end
        " target="_blank" rel="noopener noreferrer">
          Download {name}
        </a> 
      </div>
    </div>
  );
}
export default AppCard;
