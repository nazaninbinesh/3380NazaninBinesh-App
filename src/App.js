import React, { useState, useEffect } from "react";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import NotFound from "./Components/NotFound/NotFound";
import withAuth from "./Services/withAuth";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {registerUser} from './Services/Services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //Set hooks for user information
  const notify = () => {toast.success('Congrats! You have sucessfully registered.', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

    console.log("notify")
  }
    const redirectToLogin = () =>{
      console.log("redirect");
      //history.push('/');      
      //return <Redirect  to="/" />
    }

  const [user, setUser] = useState({});
  function updated(e) {  
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  }

  async function registered(e){
    await registerUser(user)   
    await notify();
    await redirectToLogin()
     
  }

  
  
  // function getToken(e)    {

  //     e.preventDefault();

  //     console.log({"email": email, "password": password})

  //     fetch('http://localhost:8000/api/login',
  //     { method: 'POST',
  //         body: JSON.stringify({"email": email, "password": password}),
  //     headers: { 'Content-Type':'application/json'}
  //     })
  //     .then(res => res.json())
  //     .then(user_token => {
  //         let { token } = user_token;
  //         localStorage.setItem('token', token);
  //         //Redirect the user somehow...
  //         return <Redirect to ="/MainPage" />
  //     })
  // }
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact component={withAuth(Signin)}></Route>                      
            <Route path="/signup" render={() => <Signup update={updated} register={registered} />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
        <ToastContainer /> 
      </div>
    </div>
  );
}

export default App;
