import React from "react";


function Menu() {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid"> 
          <div class= "row">
            <div class= "col-md-6">
              <a className="navbar-brand" href="/" role="button">Home</a>
              <a className="navbar-brand" href="/regiok" role="button">Regiok</a>
              <a className="navbar-brand" href="/regisztracio" role="button">Regisztráció</a>
              <a className="navbar-brand" href="/regisztracio2" role="button">Regisztráció2</a>
            </div>
          </div>
          
        </div>
      </nav>
);
}

export default Menu;