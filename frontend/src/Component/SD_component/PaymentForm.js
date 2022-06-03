import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../HP_Component/Footer.css";
import "../HP_Component/StyleSheet.css";
import "../HP_Component/FormStyles.css";
import Header from "../HP_Component/Header";
import Footer from "../HP_Component/Footer";
import swal from "sweetalert";

export default function PayementForm() {
  const [c_name, setc_name] = useState("");
  const [card_num, setcard_num] = useState("");
  const [exp_month, setexp_month] = useState("");
  const [exp_year, setexp_year] = useState("");
  const [cvc_num, setcvc_num] = useState("");
  const[card_type,setcard_type]=useState("");
  const sendData = async (e) => {
    e.preventDefault();

    let newCustomer = {
      c_name: c_name,
      card_num: card_num,
      exp_month: exp_month,
      exp_year: exp_year,
      cvc_num: cvc_num,
      card_type:card_type
    };

    axios
      .post("http://localhost:8070/payment/add", newCustomer)
      .then(() => {
        swal({
          title: "Success!",
          text: "Deleted record Successfully",
          icon: "success",
          timer: 2000,
          button: false,
      });
      })
      .catch((err) => {
        alert(err);
      });

    setc_name("");
    setcard_num("");
    setexp_month("");
    setexp_year("");
    setcvc_num("");
    setcard_type("");
  };

  return (
    <>
      <Header />
      <section className="Payment-form ">
        <br />
        <Link to="/update">
          <button className="btn1">
            <span>
              See all saved cards
            </span>
          </button>
        </Link>
        <br/><br/>
        <h3>Add a new Card</h3>
        <br />
        <form onSubmit={sendData}>
          <div className="mb-3">
            <label htmlFor="c_name" className="form-label">
              card holders name
            </label>
            <input
              type="text"
              className="form-control"
              id="c_name"
              placeholder="card holder's name"
              onChange={(e) => {
                setc_name(e.target.value);
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="card_number" className="form-label">
              card number
            </label>
            <input
              type="text"
              className="form-control"
              id="card_number"
              placeholder="ATM card number"
              onChange={(e) => {
                setcard_num(e.target.value);
              }}
              pattern="[0-9]{12}"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exp_month" className="form-label">
              EXP Month
            </label>
            <input
              type="text"
              className="form-control"
              id="exp_month"
              placeholder="enter expire month"
              onChange={(e) => {
                setexp_month(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exp_year" className="form-label">
              EXP Year
            </label>
            <input
              type="text"
              className="form-control"
              id="exp_year"
              placeholder="enter expire year"
              onChange={(e) => {
                setexp_year(e.target.value);
              }}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="cvc_num" className="form-label">
              CVC Number
            </label>
            <input
              type="text"
              className="form-control"
              id="cvc_num"
              placeholder="enter cvc number"
              onChange={(e) => {
                setcvc_num(e.target.value);
              }}
              pattern="[0-9]{3}"
              required
            />
          </div>

          <div className="mb-3">
          <label htmlFor="card_type" className="form-label">
             Card Type
            </label>
          <input
              type="text"
              className="form-control"
              id="card_type"
              placeholder="enter card type"
              onChange={(e) => {
                setcard_type(e.target.value);
              }}
              required
            />
   </div>

          <div>
            <center>
              <button type="submit" className="btn btn-primary">
                Pay
              </button>
            </center>
          </div>
        </form>
      </section>

      <Footer />
    </>
  );
}
