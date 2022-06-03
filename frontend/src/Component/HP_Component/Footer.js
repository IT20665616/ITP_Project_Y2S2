import React from "react";
import "./Header";
import "./Content";
import "./StyleSheet.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="mainfooter" role="contentinfo">
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-2 col-sm-6">
              {/* Column1 */}
              <div class="footer-pad">
                <ul class="list-unstyled">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Contacus</a>
                  </li>
                  <li>
                    <a href="#">Email : pococasa@gmail.com</a>
                  </li>
                  <li>
                    <a href="#">contact number : 0775426376</a>
                  </li>
                  <li>
                    <a href="#">Address : 54/1, Kollupitiya, Colombo 3</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6"></div>

            <div class="col-md-3 col-sm-6">
              <Link to="/content">
                <img
                  src={require("./images/plogo.png")}
                  width="140px"
                  height="120px"
                ></img>
              </Link>{" "}
              <br></br>
            </div>

            <div class="col-md-4" text-align="center">
              <h4>Follow Us</h4>
              <ul class="social-network social-circle">
                <li>
                  <a href="#" class="icoFacebook" title="Facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="icoLinkedin" title="Linkedin">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <br></br>
              <br></br>
              <ul class="list-unstyled">
                <li>
                  <Link to="/register">ADMIN ACCOUNT</Link>
                </li>
                <br></br>
                <li>
                  <Link to="/content">RETAIL CUSTOMER PORTALL</Link>
                </li>
                <br></br>
                <li>
                <Link to="/wholesale">WHOLE SALE CUSTOMER PORTAL</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 copy">
              <p class="text-center">
                &copy; Copyright 2018 - Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
