import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";
import Header from "../HP_Component/Header";
import "./css/StyleSheet.css";

import Footer from "../HP_Component/Footer";
import { useParams } from "react-router-dom";

function EditWcus() {

  const [Business_name, setBusinessName] = useState("");
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

  const { id } = useParams();

  useEffect(() => {
    function getwCustomer() {
      axios
        .get(`http://localhost:8070/wCustomer/get/${id}`)
        .then((res) => {
          if (res.data.status) {

            setBusinessName(res.data.wCustomer.Business_name);
            setphone(res.data.wCustomer.phone);
            setEmail(res.data.wCustomer.Email);
            setWebsite(res.data.wCustomer.Website);
            setSAddress(res.data.wCustomer.Shipping_address);
            setTSince(res.data.wCustomer.Tranding_since);
            setTBusiness(res.data.wCustomer.Type_of_Businss);
            setPayment(res.data.wCustomer.Preferred_Payment);
            setRName(res.data.wCustomer.Business_Representative_name);
            setRaddress(res.data.wCustomer.Business_Representative_address);
            setRTel(res.data.wCustomer.Business_Representative_Tel);
            setRSignature(res.data.wCustomer.Business_Representative_Signature);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getwCustomer();
  }, []);



  function update(e) {
    e.preventDefault();

    const data =
    {
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
    };

    axios
      .put(`http://localhost:8070/wCustomer/update/${id}`, data)
      .then(() => {
        swal({
          title: "Success!",
          text: "UPDATED Successfully",
          icon: "success",
          timer: 2000,
          button: false,
        });
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Coulden't UPDATE your Account",
          type: "error",
        });
      });

    setTimeout(() => {
      window.location.replace("http://localhost:3000/updateWC");
    }, 2500);
  }

 

  return (
    <>
      <section className="get-in-touch" width="70%">
        <div className="font">
          <b>
            <div className="title">
              <h1 align="center">Update Your Account</h1>
            </div>
            <br />
            <br />
            <form onSubmit={update}>
              <div class="form-group row">
                <label for="Business name " class="col-sm-2 col-form-label">Business Name</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputBName"
                    value={Business_name}
                    onChange={(e) => {
                      setBusinessName(e.target.value);
                    }} required />
                </div>
              </div>

              <div class="form-group row">
                <label for="Phone number" class="col-sm-2 col-form-label">Phone Number</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" value={phone}
                    onChange={(e) => {
                      setphone(e.target.value);
                    }} />
                </div>
              </div>

              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" readonly class="form-control" id="staticEmail" value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }} required />
                </div>
              </div>

              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Web Site</label>
                <div class="col-sm-10">
                  <input type="text" readonly class="form-control" id="staticEmail" value={Website}
                    onChange={(e) => {
                      setWebsite(e.target.value);
                    }} required />
                </div>
              </div>

              <div class="form-group row">
                <label for="Address" class="col-sm-2 col-form-label">Shipping_address</label>
                <div class="form-row">
                  <div class="col-5">
                    <input type="text" class="form-control" value={Shipping_address}
                      onChange={(e) => {
                        setSAddress(e.target.value);
                      }} required />
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" value={Shipping_address}
                      onChange={(e) => {
                        setSAddress(e.target.value);
                      }} required />
                  </div>
                  <div class="col">
                    <input type="text" class="form-control" value={Shipping_address}
                      onChange={(e) => {
                        setSAddress(e.target.value);
                      }} required />
                  </div>
                </div>
              </div>

              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Tranding_since</label>
                <div class="col-sm-10">
                  <input type="date" readonly class="form-control" id="staticEmail" value={Tranding_since}
                    onChange={(e) => {
                      setTSince(e.target.value);
                    }} required />
                </div>
              </div>

              <div class="form-group row">
                <label for="Type of business" class="col-sm-2 col-form-label">Type of business</label>
                <div class="col-sm-10">
                  < select class="Custome Select" readonly Class="form-control" id="staticEmail"
                    value={Type_of_Businss}
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
                    value={Preferred_Payment}
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
                  <input type="text" readonly class="form-control" id="inputBName" value={Business_Representative_name}
                    onChange={(e) => {
                      setRName(e.target.value);
                    }} required />
                </div>
              </div>

              <div class="form-group row">
                <label for="Business_rep_add " class="col-sm-2 col-form-label">Business Representative address</label>
                <div class="col-sm-10">
                  <input type="text" readonly class="form-control" id="inputBName" value={Business_Representative_address}
                    onChange={(e) => {
                      setRaddress(e.target.value);
                    }} required />
                </div>
              </div>

              <div class="form-group row">
                <label for="Business_rep_tel " class="col-sm-2 col-form-label">Business Representative tel_no</label>
                <div class="col-sm-10">
                  <input type="number" readonly class="form-control" id="inputBName" value={Business_Representative_Tel}
                    onChange={(e) => {
                      setRTel(e.target.value);
                    }} pattern="[0] [0-9] {0-9}" required />
                </div>
              </div>


              <div class="form-group row">
                <label for="Business_rep_Sig " class="col-sm-2 col-form-label">Business Representative Signature</label>
                <div class="col-sm-10">
                  <input type="text" readonly class="form-control" id="inputBName" value={Business_Representative_Signature}
                    onChang={(e) => {
                      setRSignature(e.target.value);
                    }} required />
                </div>
              </div>
              <center>
                <button type="submit" class="btn btn-outline-success" style={{ backgroundColor: "cadetblue", color: "Black", width: "200px", height: "50px" }}>
                  Update Data
                </button></center>
              <br />
            </form>
          </b>
        </div>
      </section>
    
    </>
  )
}
export default EditWcus;