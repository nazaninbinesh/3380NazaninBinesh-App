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

import AddProduct from "./Components/AddProduct/AddProduct";

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
            render={(props) => (
              <Signup />
            )}
          />
          <Route path="/panel" component={withAuth(Panel)} />
          <Route path="/panel/addProduct" component={withAuth(AddProduct)} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
