import React, { useState } from "react";
import "./AddProduct.scss";

function AddProduct(props) {
  return (
    <div className="addProduct">
      <div className="container">
        <div className="mt-5">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Product Name"
                onChange={props.update}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="productImage">Produc Image</label>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="productImage"
                  onChange={props.update}
                  accept=".jpeg, .png, .jpg"
                />
                <label className="custom-file-label" htmlFor="productImage">
                  Choose file
                </label>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="productDescription">Product Description</label>
              <textarea
                type="text"
                className="form-control"
                id="productDescription"
                placeholder="Product Description"
                onChange={props.update}
              ></textarea>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="productCondition">Product Condition</label>
              <textarea
                type="text"
                className="form-control"
                id="productCondition"
                placeholder="Product Condition"
                onChange={props.update}
              ></textarea>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="productPrice">Price</label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                onChange={props.update}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="productStatus">product Status</label>
              <select
                id="productStatus"
                className="form-control"
                onChange={props.update}
              >
                <option defaultValue>Choose...</option>
                <option>Available</option>
                <option>Unavailable</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary w-100 btn btn-lg"
            onClick={props.addProduct}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
