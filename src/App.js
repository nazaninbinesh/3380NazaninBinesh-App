import React, { useState, useEffect } from "react";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Panel from "./Components/Panel/Panel";
import NotFound from "./Components/NotFound/NotFound";
import WithAuth from "./Services/withAuth";
import AddProduct from "./Components/AddProduct/AddProduct";
import Signout from "./Components/Signout/Signout";
import Products from './Components/Products/Products';
import EditProduct from './Components/EditProduct/EditProduct'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



function App() {
  
  return (
    <div className="App">     
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Signin />
            )}
          />            
          <Route
            path="/signup"
            exact
            render={(props) => (
              <Signup />
            )}
          />
          <Route exact path="/panel" component={WithAuth(Panel)} />                  
          <Route exact path="/panel/addProduct" component={WithAuth(AddProduct)} />
          <Route exact path="/panel/products" component={WithAuth(Products)} />
          
          <Route exact path="/panel/products/:id" component={WithAuth(EditProduct)} />
          <Route exect path="/signout" component={Signout} />
          <Route exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
