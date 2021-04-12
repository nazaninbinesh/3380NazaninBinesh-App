import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { productsList } from "../../Services/Services";
import EditProduct from "../EditProduct/EditProduct";
import "./Products.scss";
import { useHistory } from "react-router-dom"

function Products() {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    loadData();
  }, []);
  function loadData() { 
   console.log("refreshpage")
    productsList()
      .then((json) => {
        setProductList(json);
        return productList;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function editProduct(e){   
    return <Redirect to='/panel/products/:id' /> 
    // const params = new URLSearchParams();
    // console.log("e",e.target.value)
    // setQuery(e.target.value)
    // if (query) {
    //   params.append("/products/", query)
    // } else {
    //   params.delete("id")
    // }
    // history.push({search: params.toString()})
  // }, [query, history])
   // console.log("e",e)
    //
      //console.log("edit",e.target.value)
  }
  function deleteProduct(e){   
    return fetch(`${process.env.REACT_APP_API_BASE_URL}` + "products/remove/"+`${e.target.value}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },      
    })
      .then((response) => response.json()) 


  }

  return (
    <div className="bd-example">
      <div className="card-deck">
        {productList.map((item, index) => (
          <div className="card col-sm-6 col-xs-12 col-md-4 col-lg-3" key={index}>
            <img
              className="card-img-top"
              src={item.productImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">{item.productName}</h5>
              <p className="card-text">{item.productDescription}</p>
              <hr />
              <p className="card-text">{item.productCondition}</p>
            </div>
            <div className="card-footer">
              <div>
                <small className="text-muted">
                  Price: ${item.productPrice} CAD
                </small>
              </div>
              <div>
                <small className="text-muted">{item.productStatus}</small>
              </div>
            </div>
            <div className="card-footer">               
                <button className="btn btn-warning" onClick={editProduct} value={item._id}>Edit</button>
                <button className="btn btn-danger" onClick={deleteProduct} value={item._id}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
