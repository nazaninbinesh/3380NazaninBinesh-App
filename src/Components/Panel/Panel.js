import React from "react";
import PanelSidebar from "../PanelSidebar/PanelSidebar";

function Panel(props) {
  console.log("props", props);
  return (
    <div>     
      <PanelSidebar />      
    </div>
  );
}

export default Panel;
