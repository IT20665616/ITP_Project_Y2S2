import React, { useState, useEffect } from "react";
// import FileBase64 from "react-file-base64";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import axios from "axios";
import Header from "../HP_Component/Header";
import "../HP_Component/StyleSheet.css";
import "../HP_Component/FormStyles.css";
import Footer from "../HP_Component/Footer";
import { useParams } from "react-router-dom";


function CashdelEdit(props) {
  const [d_cus, setd_cus] = useState("");
  const [dc_phone, setdc_phone] = useState("");
  const [inputAddress, setinputAddress] = useState("");
  const [inputAddress2, setinputAddress2] = useState("");
  const [inputCity, setinputCity] = useState("");
  const[inputState,setinputState]=useState("");
  const[inputZip,setinputZip]=useState("");
    const { id } = useParams();

    useEffect(() => {
        function getcashDel() {
            axios
                .get(`http://localhost:8070/cashDel/get/${id}`)
                .then((res) => {

                    if (res.data.status) {
                        setd_cus(res.data.cashDel.d_cus);
                        setdc_phone(res.data.cashDel.dc_phone);
                        setinputAddress(res.data.cashDel.inputAddress);
                        setinputAddress2(res.data.cashDel.inputAddress2);
                        setinputCity(res.data.cashDel.inputCity);
                        setinputState(res.data.cashDel.inputState);
                        setinputZip(res.data.cashDel.inputZip);
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getcashDel();
    }, []);


    function update(e) {
        e.preventDefault();


        const data = {
            d_cus,
            dc_phone,
            inputAddress,
            inputAddress2,
            inputCity,
            inputState,
            inputZip
        };

        axios
            .put(`http://localhost:8070/cashDel/update/${id}`, data)
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
                    text: "Coulden't UPDATE your details",
                    type: "error",
                });
            });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/cashupdate");
        }, 2500);

    }

    return (
        <>
          <Header />
          <section className="Payment-form ">
            <br />
          
            <br/><br/>
            <h3>Edit Cash on delivery Details</h3>
            <br />
            <form onSubmit={update}>

              {/* customer name */}
              <div className="mb-3">
                <label htmlFor="d_cus" className="form-label">
                  customer  name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="d_cus"
                  placeholder=" enter customer name here"
                  value={d_cus}
                  onChange={(e) => {
                    setd_cus(e.target.value);
                  }}
                />
              </div>

                  {/* phone number */}
              <div className="mb-3">
                <label htmlFor="dc_phone" className="form-label">
                 customer phone number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dc_phone"
                  placeholder="enter your phone number here"
                  
                  onChange={(e) => {
                    setdc_phone(e.target.value);
                  }}
                  value={dc_phone}
                  
                />
              </div>

              {/* address1 */}
              <div className="mb-3">
                <label htmlFor="inputAddress" className="form-label">
                  customer Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="enter your primary address"
                  value={inputAddress}
                  onChange={(e) => {
                    setinputAddress(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="inputAddress2" className="form-label">
                  customer  backup Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="enter your backup address here"
                  value={inputAddress2}
                  onChange={(e) => {
                    setinputAddress2(e.target.value);
                  }}
                />
              </div>

              {/* city */}
              <div className="mb-3">
                <label htmlFor="inputCity" className="form-label">
                 Input your city
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  value={inputCity}
                  placeholder="enter your city here"
                  onChange={(e) => {
                    setinputCity(e.target.value);
                  }}
                />
              </div>

              {/* inputState */}
              <div className="mb-3">
                <label htmlFor="inputState" className="form-label">
                  your State
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputState"
                  placeholder="enter your state here"
                  value={inputState}
                  onChange={(e) => {
                    setinputState(e.target.value);
                  }}
                />
              </div>
          {/* inputZip*/}
          <div className="mb-3">
                <label htmlFor="inputZip" className="form-label">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputZip"
                  placeholder="enter Zip Code here"
                  value={inputZip}
                  onChange={(e) => {
                    setinputZip(e.target.value);
                  }}
                />
              </div>
    

              <div>
                <center>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </center>
              </div>
            </form>
          </section>
    
          <Footer />
        </>
      );
}

export default (CashdelEdit);