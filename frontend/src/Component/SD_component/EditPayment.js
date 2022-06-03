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


function EditPayment(props) {
  const [c_name, setcname] = useState("");
  const [card_num, setcardnum] = useState("");
  const [exp_month, setexpmonth] = useState("");
  const [exp_year, setexpyear] = useState("");
  const [cvc_num, setcvcnum] = useState("");
  const[card_type,setcardtype]=useState("");

    const { id } = useParams();

    useEffect(() => {
        function getPayment() {
            axios
                .get(`http://localhost:8070/payment/get/${id}`)
                .then((res) => {

                    if (res.data.status) {
                        setcname(res.data.payment.c_name);
                        setcardnum(res.data.payment.card_num);
                        setexpmonth(res.data.payment.exp_month);
                        setexpyear(res.data.payment.exp_year);
                        setcvcnum(res.data.payment.cvc_num);
                        setcardtype(res.data.payment.card_type);
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getPayment();
    }, []);


    function update(e) {
        e.preventDefault();


        const data = {
            c_name,
            card_num,
            exp_month,
            exp_year,
            cvc_num,
            card_type
        };

        axios
            .put(`http://localhost:8070/payment/update/${id}`, data)
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
                    text: "Coulden't UPDATE your payment",
                    type: "error",
                });
            });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/update");
        }, 2500);

    }

    return (
        <>
          <Header />
          <section className="Payment-form ">
            <br />
          
            <br/><br/>
            <h3>Edit Card Details</h3>
            <br />
            <form onSubmit={update}>

              {/* card holder name */}
              <div className="mb-3">
                <label htmlFor="c_name" className="form-label">
                  card holders name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="c_name"
                  placeholder="card holder's name"
                  value={c_name}
                  onChange={(e) => {
                    setcname(e.target.value);
                  }}
                />
              </div>

                  {/* card number */}
              <div className="mb-3">
                <label htmlFor="card_num" className="form-label">
                  card number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="card_num"
                  placeholder="ATM card number"
                  
                  onChange={(e) => {
                    setcardnum(e.target.value);
                  }}
                  pattern="[0-9]{12}"
                  value={card_num}
                  required
                />
              </div>

              {/* exp month */}
              <div className="mb-3">
                <label htmlFor="exp_month" className="form-label">
                  EXP Month
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exp_month"
                  placeholder="enter expire month"
                  value={exp_month}
                  onChange={(e) => {
                    setexpmonth(e.target.value);
                  }}
                />
              </div>

              {/* exp year */}
              <div className="mb-3">
                <label htmlFor="exp_year" className="form-label">
                  EXP Year
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exp_year"
                  value={exp_year}
                  placeholder="enter expire year"
                  onChange={(e) => {
                    setexpyear(e.target.value);
                  }}
                />
              </div>

              {/* cvc number */}
              <div className="mb-3">
                <label htmlFor="cvc_num" className="form-label">
                  CVC Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cvc_num"
                  placeholder="enter cvc number"
                  value={cvc_num}
                  onChange={(e) => {
                    setcvcnum(e.target.value);
                  }}
                  pattern="[0-9]{3}"
                  required
                />
              </div>
          {/* card type */}
          <div className="mb-3">
                <label htmlFor="card_type" className="form-label">
                  card type
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="card_type"
                  placeholder="enter card type here"
                  value={card_type}
                  onChange={(e) => {
                    setcardtype(e.target.value);
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

export default (EditPayment);
