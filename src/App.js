import React from "react";
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'
import NotFound from './Components/NotFound/NotFound'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path='/' exact component={Signin}></Route>  
            <Route path='/signup' component={Signup}></Route>    
            <Route component={NotFound} />      
          </Switch>
        </Router>             
      </div>      
    </div>
  );
}

export default App;
