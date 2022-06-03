import React, { useState } from "react"
import axios from "axios";
import Footer from "../HP_Component/Footer";
import { Link } from "react-router-dom";
import "./css/StyleSheet.css";
import "./css/FormStyles.css";

export default function RegisterWcustomer() {

  const [Business_name, setBusiness_name] = useState("");
  const [phone, setphone] = useState("");
  const [Email, setEmail] = useState("");
  const [Website, setWebsite] = useState("");
  const [Shipping_address, setSAddress] = useState("");
  const [Tranding_since, setTSince] = useState("");
  const [Type_of_Businss, setTBusiness] = useState("");
  const [Preferred_Payment, setPayment] = useState("");
  const [Business_Representative_name, setRName] = useState("");
  const [Business_Representative_address, setRaddress] = useState("");
  const [Business_Representative_Tel, setRTel] = useState("");
  const [Business_Representative_Signature, setRSignature] = useState("");

  function sendData(e) {
    e.preventDefault();

    const NewWCustomer = {
      Business_name,
      phone,
      Email,
      Website,
      Shipping_address,
      Tranding_since,
      Type_of_Businss,
      Preferred_Payment,
      Business_Representative_name,
      Business_Representative_address,
      Business_Representative_Tel,
      Business_Representative_Signature

    }
    axios.post("http://localhost:8070/wCustomer/add", NewWCustomer).then(() => {
      alert("Successfully added")

    }).catch((err) => {
      alert(err)
    })

  }


  return (
    <>

      <br /><br />
      <Link to="/wholesale" >
        <img
          src={require("./images/backward.png")}
          width="110px"
          height="100px"
        ></img>
      </Link>
      <h1 align="center"><b><i>Welcome to POCO CASA Whole Sale Customer Portal</i></b></h1><br />
      <hr></hr><br /><br />
      <div className="container" style={{ backgroundColor: 'honeydew' }}>
        <form onSubmit={sendData}>

          <br /><br />
          <center><h2><b>Register Form</b></h2></center> <br /><br />
          <div class="form-group row">
            <label for="Business name " class="col-sm-2 col-form-label">Business Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputBName"
                placeholder="Enter your business name"
                onChange={(e) => {
                  setBusiness_name(e.target.value);

                }} required />
            </div>
          </div>

          <div class="form-group row">
            <label for="Phone number" class="col-sm-2 col-form-label">Phone Number</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword" placeholder="Enter Your phone Number"
                onChange={(e) => {
                  setphone(e.target.value);
                }} />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" readonly class="form-control" id="staticEmail" placeholder="abcd@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }} required />
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Web Site</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control" id="staticEmail" placeholder="Enter your website name"
                onChange={(e) => {
                  setWebsite(e.target.value);
                }} required />
            </div>
          </div>

          <div class="form-group row">
            <label for="Address" class="col-sm-2 col-form-label">Shipping_address</label>
            <div class="form-row">
              <div class="col-7">
                <input type="text" class="form-control" placeholder="City"
                  onChange={(e) => {
                    setSAddress(e.target.value);
                  }} required />
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="State"
                  onChange={(e) => {
                    setSAddress(e.target.value);
                  }} required />
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Zip"
                  onChange={(e) => {
                    setSAddress(e.target.value);
                  }} required />
              </div>
            </div>
          </div>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Tranding_since</label>
            <div class="col-sm-10">
              <input type="date" readonly class="form-control" id="staticEmail" placeholder=""
                onChange={(e) => {
                  setTSince(e.target.value);
                }} required />
            </div>
          </div>

          <div class="form-group row">
            <label for="Type of business" class="col-sm-2 col-form-label">Type of business</label>
            <div class="col-sm-10">
              < select class="Custome Select" readonly Class="form-control" id="staticEmail"
                onChange={(e) => {
                  setTBusiness(e.target.value);
                }} required>
                <option selected>select your business type</option>
                <option value="1">internet</option>
                <option value="2">Blicks and mortar</option>
                <option value="3">Wholesale</option></select>
            </div>
          </div>

          <div class="form-group row">
            <label for="Type of payment" class="col-sm-2 col-form-label">Preferred_Payment</label>
            <div class="col-sm-10">
              < select class="Custome Select" readonly Class="form-control" id="staticEmail"
                onChange={(e) => {
                  setPayment(e.target.value);
                }} >
                <option selected>select your Preferred Payment method :</option>
                <option value="1">Bank transfer</option>
                <option value="2">Money Order </option>
                <option value="3">Visa/Master</option>
                <option value="3">Cheque</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="Business rep name " class="col-sm-2 col-form-label">Business Representative name</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control" id="inputBName" placeholder="Enter business rep name"
                onChange={(e) => {
                  setRName(e.target.value);
                }} required />
            </div>
          </div>

          <div class="form-group row">
            <label for="Business_rep_add " class="col-sm-2 col-form-label">Business Representative address</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control" id="inputBName" placeholder="Enter business rep add"
                onChange={(e) => {
                  setRaddress(e.target.value);
                }} required />
            </div>
          </div>

          <div class="form-group row">
            <label for="Business_rep_tel " class="col-sm-2 col-form-label">Business Representative tel_no</label>
            <div class="col-sm-10">
              <input type="number" readonly class="form-control" id="inputBName" placeholder="Enter business rep tel_no"
                onChange={(e) => {
                  setRTel(e.target.value);
                }} pattern="0-9{10}" required />
            </div>
          </div>


          <div class="form-group row">
            <label for="Business_rep_Sig " class="col-sm-2 col-form-label">Business Representative Signature</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control" id="inputBName" placeholder=""
                onChange={(e) => {
                  setRSignature(e.target.value);
                }} required />
            </div>
          </div>
          <center>
            <button style={{ backgroundColor: "cadetblue", color: "Black", width: "200px", height: "50px" }}>
              <b>
                Login
              </b>
            </button>
            <br /><br />
          </center>

        </form>

      </div>
      <br /><br /><br />
      <Footer />

      /</>

  )
}