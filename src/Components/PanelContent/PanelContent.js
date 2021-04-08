import React from "react";
import "./PanelContent.scss";
import AddProduct from "../AddProduct/AddProduct";
import Products from "../Products/Products";

function PanelContent(props) {
//   if (props == "AddProduct") {
//     return <AddProduct />;
//   }
//   else if(props == "Products"){
//   return <Products />;
// } 
  return (
    <div className="panelContent">
      <PanelContent props={AddProduct}   />  
    </div>
  );
}

export default PanelContent;
