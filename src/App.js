import React from "react";
import Signin from './Components/Signin/Signin'
import Signup from './Components/Signup/Signup'

function App() {
  return (
    <div className="App">
      <div className="container">
        <Signin />
        <Signup />
      </div>      
    </div>
  );
}

export default App;
