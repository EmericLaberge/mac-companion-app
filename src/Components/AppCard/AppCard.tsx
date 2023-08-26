import React from "react";
import "./AppCard.css";

interface AppCardProps {
  name: string;
  description: string;
  image: string;
  link: string;
}
function AppCard(props: AppCardProps) {
  const { name, description, image, link } = props;

  return (
    <div className="app-card">
      <div className="app-left">
        <h2 className="app-name">{name}</h2>
        <img src={image} alt={`${name} App`} className="app-image" />
      </div>
      <div className="app-right">
        <div className="app-description-container">
          <p className="app-description">{description}</p>
        </div>
        <a href={link} className="app-link">
          Download {name}
        </a>
      </div>
    </div>
  );
}
export default AppCard;
