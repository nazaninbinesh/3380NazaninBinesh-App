import React, { useState } from "react";
import './Signin.scss'
import {Link, Redirect} from 'react-router-dom';


function Signin(props) {
  return (
    <main className="form-signin mt-5">
      <form>
        <img
          className="mb-2"
          src="/logo.png"
          alt="Logo"
          width="95"
          height="auto"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={props.email}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={props.password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>       
        <button className="w-100 btn btn-lg btn-primary" onClick={props.login}>
          Sign in
        </button>  
        <div className="mt-3">
            <p>
            You don't have an account!  <Link to='/signup'>Sign up</Link> now.
            </p>            
        </div>      
      </form>
    </main>
  );
}

export default Signin;