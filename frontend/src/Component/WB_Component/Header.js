import React from "react";
import { Link } from "react-router-dom";
import "./css/StyleSheet.css";

function Header() {
  return (
    <>
      <div className="font">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid">
            <Link to="/homeWC" className="navbar-brand">
              <img
                src={require("./images/logo.jpeg")}
                width="110px"
                height="100px"
              ></img>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/homeWC" class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/updateWC" class="nav-link">
                    My Profile
                  </Link>
                </li>
                <li class="/#">
                  <Link to="/products" class="nav-link">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/#" class="nav-link">
                    Place an Order
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/#" class="nav-link">
                    My Orders
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Customer care
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Complaints
                    </a>
                    <a class="dropdown-item" href="#">
                      Inquires
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
