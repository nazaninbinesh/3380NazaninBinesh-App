import React from "react";
import "./Signup.scss";

function Signup(props) {
  return (
    <div className="container">
      <div className="mt-5">
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              onChange={props.update}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              onChange={props.update}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="birthDate">Birth Date</label>
            <input
              type="date"
              className="form-control"
              id="birthDate"
              placeholder="Birth Date"
              onChange={props.update}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="country">Country</label>
            <select
              id="country"
              className="form-control"
              onChange={props.update}
            >
              <option defaultValue>Choose...</option>
              <option>Canada</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="provinc">Province</label>
            <select
              id="provinc"
              className="form-control"
              onChange={props.update}
            >
              <option defaultValue>Choose...</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Northwest Territories</option>
              <option>Nova Scotia</option>
              <option>Nunavut</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
              <option>Yukon</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              onChange={props.update}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-10">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              onChange={props.update}
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              onChange={props.update}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={props.update}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={props.update}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary w-100 btn btn-lg"
          onClick={props.register}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
