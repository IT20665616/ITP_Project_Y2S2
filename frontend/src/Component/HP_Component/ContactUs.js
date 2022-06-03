import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./StyleSheet.css";
import "./FormStyles.css";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <Header />
      <section className="info-box5">
        <div className="font">
          <br />
          <h1 align="center">
            <i>Contact POCO CASA..</i>
          </h1>
          <br />
          <br />

          <h5 align="center">
            Website : www.pococasa.com <br />
            <br />
            Email : info@pococasa.com
            <br />
            <br />
            Contact numbers <br /> 0112 978 978
            <br /> 0772 354 263
            <br />
            <br />
            Address : 234/A, Sampaya Road, Colombo 3<br></br>
            <br />
          </h5>
          <br />
          <br />
          <br />
          <br />
          <br />

          <hr></hr>
          <center>
            <h1>Thank you for joining with us..</h1>
            <br />
            <Link to="/">
              <img
                src={require("./images/logo.jpeg")}
                width="200px"
                height="200px"
              ></img>
            </Link>
            <br />
          </center>
        </div>
      </section>

      {/* navigates to home */}
      <Link to="/">
        <center>
          <img src={require("./images/home.png")} height="70px" width="70px" />
        </center>
        <br />
      </Link>
      <Footer />
    </>
  );
}
export default ContactUs;
