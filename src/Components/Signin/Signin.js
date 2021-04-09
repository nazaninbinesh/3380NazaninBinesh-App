import React, { useState } from "react";
import './Signin.scss'
import {Link, Redirect} from 'react-router-dom';


function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToPanel, setRedirectToPanel] = useState(false);

    //Functions to invoke on change
    function passwordChange(e) {
      setPassword(e.target.value);
    }
  
    function emailChange(e) {
      setEmail(e.target.value);
    }

    function getToken(e) {
      e.preventDefault();      
  
      fetch(`${process.env.REACT_APP_API_BASE_URL}` + "api/login", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((user_token) => {
          let { token } = user_token;
          sessionStorage.setItem("token", token);
  
          setRedirectToPanel(true)                    
        });
    }
    //Redirect the user somehow...
    if(redirectToPanel) 
    return <Redirect to="/panel" />;

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
            onChange={emailChange}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={passwordChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>       
        <button className="w-100 btn btn-lg btn-primary" onClick={getToken}>
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