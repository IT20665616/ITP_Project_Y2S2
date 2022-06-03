import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import "../HP_Component/StyleSheet.css";
import "../HP_Component/FormStyles.css";
import Footer from "../HP_Component/Footer";
import Header from "../HP_Component/Header";
import jsPdf from 'jspdf'
import 'jspdf-autotable'

function PaymentUpdate() {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    function getpayments() {
      axios
        .get("http://localhost:8070/payment/")
        .then((res) => {
          setPayments(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getpayments();
  }, []);

  function deletepayment(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover these details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then(() => {
        axios.delete(`http://localhost:8070/payment/delete/${id}`);
        swal({
          title: "Success!",
          text: "Deleted record Successfully",
          icon: "success",
          timer: 2000,
          button: false,
        });
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Coulden't Delete your Product",
          type: "error",
        });
      });

    setTimeout(() => {
      window.location.replace("http://localhost:3000/update");
    }, 5000);
  }

  //pdf generating
  function jsPdfGenerator() {

    //new document in jspdf
    var doc = new jsPdf('p', 'pt');


    doc.autoTable({ html: '.table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } },
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("Saved cards.pdf");
  }


  return (
    <>
      <Header />
      <section className="info-box2">
        <div className="font">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Cardholder's Name</th>
                <th scope="col">Card Number</th>
                <th scope="col">Expire Month</th>
                <th scope="col">Expire Year</th>
                <th scope="col">CVC</th>
                <th scope="col">card type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((val, key) => {
                return (
                  <tr>
                    <td>{val.c_name}</td>
                    <td >{val.card_num}</td>
                    <td >{val.exp_month}</td>
                    <td >{val.exp_year}</td>
                    <td >{val.cvc_num}</td>
                    <td >{val.card_type}</td>
                    <td width="150px">
                      <Link to={`/edit/${val._id}`}>
                        <button type="submit" class="btn btn-outline-secondary">
                          Update
                        </button>
                      </Link>
                      <br />
                      <br />

                      <button
                        class="btn btn-outline-success"
                        type="submit"
                        onClick={() => deletepayment(val._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
        </div>
      </section>
      <div className="d-grid" style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
        <input type="button" value="Print Pdf" onClick={() => jsPdfGenerator()} className="btn btn-warning" />
      </div>

      <br/><br/>
      <Footer />
    </>
  );
}
export default PaymentUpdate;
