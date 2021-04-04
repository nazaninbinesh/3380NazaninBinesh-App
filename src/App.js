import React, { useState } from 'react';
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import NotFound from './Components/NotFound/NotFound'
import withAuth from './Services/withAuth';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function App() {
    //Set hooks for user information
    const[user,setUser] = useState({});

    function updated(e){   
      console.log("E",e.target.value);
      setUser({
        ...user,
        [e.target.id]:e.target.value
      })
      console.log("User",user)
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
            <Route path='/' exact component={withAuth(Signin)}></Route>              
            <Route path='/signup' component={() => <Signup update={updated} />}></Route>    
            <Route component={NotFound} />                    
          </Switch>
        </Router>             
      </div>      
    </div>
  );
}

export default App;
