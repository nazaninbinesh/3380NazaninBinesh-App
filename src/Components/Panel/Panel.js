import {React,useEffect,useState} from "react";
import PanelSidebar from "../PanelSidebar/PanelSidebar";
import PanelContent from "../PanelContent/PanelContent";
import "./Panel.scss";

function Panel(props) {
  console.log("props", props);
  const[url,setUrl] = useState("");
  const[component,setComponent] = useState("");

  useEffect(()=>{
    setUrl(props.location.pathname);    
     
  },[]);

  componentName();
  
  function componentName(){
    console.log("my URL",url)   
    switch(url){
      case "/panel/addProduct" : 
       componentName = 'AddProduct';       
       break;

      case "/panel" : 
       componentName = 'Products';
       break; 

       default: 
       componentName = 'Products';

       return componentName;
    }
  }

  return (
    <div className="panel">     
      <PanelSidebar />  
      <PanelContent componentName={componentName} />
    </div>
  );
}

export default Panel;
