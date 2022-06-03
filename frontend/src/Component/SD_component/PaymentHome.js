import React from "react";
import '../HP_Component/Footer.css';
import '../HP_Component/StyleSheet.css';
import '../HP_Component/FormStyles.css';
import Header from "../HP_Component/Header";
import Footer from "../HP_Component/Footer";
import { Link } from "react-router-dom";

function PaymentHome() {
  return (
    <>
      <Header />
      <section className="info-box1">
        <div className="font">
          <br />
          <h1 align="center">
            <b>Choose a payment method</b>
          </h1>
          <br />

            <center>
          <Link to="/cashdelform">
            <button className="button">
              <span> Cash on delivery </span>
            </button>
          </Link>
          <br />
          <br />
          <Link to="/card">
            <button className="button">
              <span>Card Payments</span>
            </button>
          </Link>
          </center>
          
          <br />
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

export default PaymentHome;
