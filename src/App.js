import React, { useState, useEffect } from "react";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Panel from "./Components/Panel/Panel";
import NotFound from "./Components/NotFound/NotFound";
import withAuth from "./Services/withAuth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { registerUser } from "./Services/Services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
    await redirectToLogin();
  };
  const redirectToLogin = () => {
    
    setIsUserAuthenticated(true)
    if(isUserAuthenticated){
      console.log("redirect");
      return <Redirect to ="/" />
    }
    //history.push('/');
    
    
  };

  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  
  //Functions to invoke on change
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function updated(e) {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  }

  async function registered(e) {
    await registerUser(user);
    await notify();    
  }  

  function getToken(e) {
    e.preventDefault();    
    console.log({ email: email, password: password });

    fetch(`${process.env.REACT_APP_API_BASE_URL}`+"api/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())      
      .then((user_token) => {
        let { token } = user_token;       
        localStorage.setItem("token", token);                         
       
        //Redirect the user somehow... 
        return <Redirect to="/panel" />                             
                       
      })      
  }

  return (
    <div className="App">      
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Signin email={emailChange} password={passwordChange} login={getToken} />}
             />
            <Route
              path="/signup"
              render={() => <Signup update={updated} register={registered} />}
            />
            <Route path="/panel" component={withAuth(Panel)} />              
            <Route component={NotFound} />
            
          </Switch>
        </Router>
        <ToastContainer />
      
    </div>
  );
}

export default App;
