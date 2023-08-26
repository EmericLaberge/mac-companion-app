import React from "react";
import "./SetupItem.css";

interface Props {
  name: string;
  why: string;
  how: string;
}
function SetupItem(props: Props) {
  return (
<div className="setup-item">
  <h1 className="setup-item-title">{props.name}</h1>
  <h2 className="setup-item-subsection">Why</h2>
  <p className="setup-item-description">{props.why}</p>
  <h2 className="setup-item-subsection">How</h2>
  <p className="setup-item-description">{props.how}</p>
</div>

  );
}
export default SetupItem;
