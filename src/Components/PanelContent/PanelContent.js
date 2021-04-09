import React,{useState} from "react";
import "./PanelContent.scss";
import AddProduct from "../AddProduct/AddProduct";
import Products from "../Products/Products";
import {registerProduct} from '../../Services/Services'

function PanelContent(props) {
  const [product, setProduct] = useState({});
  function updated(e) {
    setProduct({
      ...product,
      [e.target.id]: e.target.value,
    });
  }

  async function addProduct(e){
    console.log("Nazanin")
    await registerProduct(product);
  }
  
  

  return (
    <div className="panelContent">
      {props.componentName == "Products" ? <Products /> :  <AddProduct update={updated} addProduct={addProduct} />}      
    </div>
  );
}

export default PanelContent;
