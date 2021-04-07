import React from "react";

function PanelHeader(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/logo.png"
            alt=""
            width="auto"
            height="80"
            className="d-inline-block align-text-top"
          />
         
        </a>
        <p> Nazanin Binesh</p>
      </div>
    </nav>
  );
}

export default PanelHeader;
