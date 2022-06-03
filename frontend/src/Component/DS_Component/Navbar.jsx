import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light shadow">
        <div class="container">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to='/home' class="nav-link" >Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='/Reviews' class="nav-link" >Reviews</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='/producthome' class="nav-link" >Products</NavLink>
              </li>

              <li class="nav-item">
                <NavLink to='/stock/material/' class="nav-link" >Stock Handling</NavLink>
              </li>


            </ul>
            <div className="navbar-brand fw-bolder fs-4 mx-auto" >
            <NavLink to="/home" className="navbar-brand">
              <img
                src={require("../HP_Component/images/logo.jpeg")}
                width="110px"
                height="100px"
              ></img>
            </NavLink>
            </div>

            <NavLink to='/homeWC' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
              <i className="fa fa-user-plus me-2"></i> W-Customer</NavLink>
            <NavLink to='/content' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
              <i className="fa fa-user-plus me-2"></i> R-Customer</NavLink>
            <NavLink to='/Login' className="btn btn-outline-primary ms-2 px-4 rounded-pill">
              <i className="fa fa-user-plus me-2"></i>  Admin{" "} </NavLink>



              <div className="navbar-brand fw-bolder fs-4 mx-auto" >
              <NavLink to="/Adminprofile" class="nav-link">
                  <img
                    src={require("../HP_Component/images/user.png")}
                    height="70px"
                    width="70px"
                  />
                </NavLink>
</div>

          </div>

        </div>
      </nav>
    </div>
  );
}



export default Navbar;