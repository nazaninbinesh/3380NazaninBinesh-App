import React from "react";
import PanelSidebar from "../PanelSidebar/PanelSidebar";
import PanelContent from "../PanelContent/PanelContent";
import "./Panel.scss";

function Panel(props) {
  console.log("props", props);
  return (
    <div className="panel">     
      <PanelSidebar />  
      <PanelContent />
    </div>
  );
}

export default Panel;
