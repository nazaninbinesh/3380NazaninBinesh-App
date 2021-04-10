import { Redirect } from "react-router";

export async function registerUser(newUser) {
  const userData = JSON.stringify(newUser);
  return fetch(`${process.env.REACT_APP_API_BASE_URL}` + "api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: userData,
  })
    .then((response) => response.json())
    .then(console.log("registered"));
}

export async function getUserInfo() {
  //get token from session storage
  var userToken = sessionStorage.getItem("token");
  
    //split token by dot
    var base64Url = userToken.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    //decode token pyload
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
 
}
export async function getToken(){
  return sessionStorage.getItem("token");
}

export async function productsList() {  
  const productOwner = await getUserInfo().then((json) => {
    return json.id;    
  });  
  // const availableToken = await getToken().then((json)=>{
  //   return json;
  // });
  return fetch(`${process.env.REACT_APP_API_BASE_URL}` + "products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({productOwner: productOwner }),
  })
    .then((response) => response.json());

}


export async function registerProduct(newProduct){
  const productOwner = await getUserInfo().then((json) => {
    return json.id;    
  });  
  
  // var imageUrl = file.name;
  // newProduct.productImage = imageUrl;
  var productData = newProduct;     
  productData = JSON.stringify({...productData, productOwner})  
  return fetch(`${process.env.REACT_APP_API_BASE_URL}` + "addProduct", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: productData,
  })
    .then((response) => response.json())
    .then(console.log("product added!"));
}