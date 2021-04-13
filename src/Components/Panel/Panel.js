import React, { useEffect, useState } from "react";
import PanelSidebar from "../PanelSidebar/PanelSidebar";
import PanelContent from "../PanelContent/PanelContent";
import "./Panel.scss";
import { getUserInfo } from "../../Services/Services";
import { Redirect } from "react-router";

function Panel(props) {  
  const [userName, setUserName] = useState("");
  const [url, setUrl] = useState("");
  const [component, setComponent] = useState("");

  useEffect(() => {
    getUserName();
    setUrl(props.match.path);    
  }, []);


  async function getUserName() {

    await getUserInfo().then((json) => {
      
      if(json === undefined) return ""
      setUserName(json.username);
    });
  }

  componentName();
   
  function componentName() {    
    switch (url) {
      case "/panel/addProduct":
        componentName = "AddProduct";
        break;

      case "/panel":
        componentName = "Products";
        break;

      case "/panel/products/:id":
        componentName = "EditProduct";
        break;
      default:
        componentName = "Products";

        return componentName;
    }
  }

  return (
    <div className="panel">
      <PanelSidebar userName={userName} />
      <PanelContent {...props} componentName={componentName} />
    </div>
  );
}
export default Panel;
