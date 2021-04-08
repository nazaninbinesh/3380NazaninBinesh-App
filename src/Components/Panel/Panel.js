import React, { useEffect, useState } from "react";
import PanelSidebar from "../PanelSidebar/PanelSidebar";
import PanelContent from "../PanelContent/PanelContent";
import "./Panel.scss";
import { getUserInfo } from "../../Services/Services";

function Panel(props) { 
  const[userName,setUserName]=useState("");

  useEffect(()=>{
    getUserName()    
  }, [])

  async function getUserName(){   
    await getUserInfo()
    .then((json)=>{      
      setUserName(json.username);
    })
    
  }

  return (
    <div className="panel">     
      <PanelSidebar userName={userName} />  
      <PanelContent />
    </div>
  );
}

export default Panel;
