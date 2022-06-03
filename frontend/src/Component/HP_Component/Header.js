import React from "react";
import { Link } from "react-router-dom";
import "./StyleSheet.css";
import FileBase64 from "react-file-base64";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  return (
    <>
      <div className="font">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
          <div class="container-fluid">
            <Link to="/contnet" className="navbar-brand">
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
                  <Link to="/content" class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/products" class="nav-link">
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/AboutUs" class="nav-link">
                    About us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contactUs" class="nav-link">
                    Contact us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/customercare" class="nav-link">
                    Customer-Care
                  </Link>
                </li>
              </ul>
                <Link to="/cart" class="nav-link">
                  <img
                    src={require("./images/cart.png")}
                    height="30px"
                    width="30px"
                  />
                </Link>

              
                <Link to="/wishlist" class="nav-link">
                  <img
                    src={require("./images/wishlist.png")}
                    height="30px"
                    width="30px"
                  />
                </Link>

                <Link to="/profileRC" class="nav-link">
                  <img
                    src={require("./images/user.png")}
                    height="80px"
                    width="80px"
                  />
                </Link>

              
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
