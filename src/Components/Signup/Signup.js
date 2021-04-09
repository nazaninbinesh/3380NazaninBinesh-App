import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./Signup.scss";
import { registerUser } from "../../Services/Services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup(props) {
  const [user, setUser] = useState({});
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  function updated(e) {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  }

  async function registered(e) {
    await registerUser(user);
    await notify(); 
    const timer = setTimeout(() => {
      setRedirectToLogin(true)
    }, 3000);
  }

  //Set hooks for user information
  const notify = async () => {
    toast.success("Congrats! You have sucessfully registered.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log("notify"); 
  };
  if(redirectToLogin) return <Redirect to='/' />

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
              onChange={updated}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              onChange={updated}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="birthDate">Birth Date</label>
            <input
              type="date"
              className="form-control"
              id="birthDate"
              placeholder="Birth Date"
              onChange={updated}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="country">Country</label>
            <select id="country" className="form-control" onChange={updated}>
              <option defaultValue>Choose...</option>
              <option>Canada</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="provinc">Province</label>
            <select id="provinc" className="form-control" onChange={updated}>
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
              onChange={updated}
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
              onChange={updated}
            />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              className="form-control"
              id="postalCode"
              onChange={updated}
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
              onChange={updated}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={updated}
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary w-100 btn btn-lg"
          onClick={registered}
        >
          Sign Up
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
