import React,{useState,useEffect} from "react";
import "./PanelContent.scss";
import AddProduct from "../AddProduct/AddProduct";
import Products from "../Products/Products";
import {editCurrentProduct, registerProduct, getProductInfo} from '../../Services/Services';
import { ToastContainer, toast } from "react-toastify";
import EditProduct from "../EditProduct/EditProduct";
import { Redirect } from "react-router";

function PanelContent(props) {
  const [product, setProduct] = useState({}); 
  
  useEffect(()=>{
    var url = window.location.pathname.split("/");
    var currentProductId = url[url.length-1];  
    if(currentProductId !=undefined )  
    getCurrentProductInfo(currentProductId);
  },[])
  
  function getCurrentProductInfo(currentProductId){
    getProductInfo(currentProductId).then((prodect)=>{
      setProduct(prodect)
    })
  }

  function updated(e) { 
    if(e.target.type =="file"){
      encodeFileBase64(e.target.files[0]);     
    }
    setProduct({
      ...product,    
      [e.target.id]: e.target.value,        
    });                  
  }

  function encodeFileBase64(file){
    var reader = new FileReader();
    if(file){
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        var base64 = reader.result
        setProduct({
          ...product, 
          productImage: base64
        });        
      };
      reader.onerror = (error)=> {
        console.log('error: ', error)
      }
    }
  }  

  async function addProduct(e){    
    encodeFileBase64()      
    await registerProduct(product);
    await notify();  
    await resetForm();
  }
  async function updateProduct(e){    
    debugger
    encodeFileBase64()      
    await editCurrentProduct(product);
    await editNotify();      
  }
  
  const resetForm = async ()=>{
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      textarea => (textarea.value = "")
    );
    Array.from(document.querySelectorAll("select")).forEach(
      select => (select.value = "")
    );   
  }

   const notify = async () => {
    toast.success("Product Added successfully !", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("notify"); 
  };
  const editNotify = async () => {
    toast.success("Product Edited successfully !", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("notify"); 
  };
  
     
  return (
    
    <div className="panelContent">
       {props.componentName == "Products" ? <Products /> 
      : props.componentName == "AddProduct" ? <AddProduct update={updated} addProduct={addProduct}  />
      : <EditProduct update={updated} productInfo={product} updateProduct={updateProduct} />}     
      <ToastContainer />
    </div>
  );
}

export default PanelContent;
