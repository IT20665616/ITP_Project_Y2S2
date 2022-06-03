import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import "./css/StyleSheet.css";
import "./css/FormStyles.css";
import jsPdf from 'jspdf'
import 'jspdf-autotable'

export default function AllWcustomers() {

  const [wCustomers, setWcustomers] = useState([]);

  useEffect(() => {
    function getwCustomer() {
      axios
        .get("http://localhost:8070/wCustomer")
        .then((res) => {
          setWcustomers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getwCustomer();
  }, []);


  const deleteWcus = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once you delete this,You can't recover details!!",
      icon: "warning",
      buttons: true,
      dangerMode: true,

    })
      .then(() => {
        axios
          .delete(`http://localhost:8070/wCustomer/delete/${id}`);
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
          text: "Coulden't Delete your Account",
          type: "error",
        });
      });
    setTimeout(() => {
      window.location.replace("http://localhost:3000/updateWC");
    }, 7000)
  }

  //pdf generating
  function jsPdfGenerator() {

    //new document in jspdf
    var doc = new jsPdf('p', 'pt');


    doc.autoTable({ html: '#my-table' })

    doc.autoTable({
      columnStyles: { europe: { halign: 'center' } },
      margin: { top: 10 },
    })

    //save the pdf
    doc.save("WholeSale Customers.pdf");
  }


  return (
    <div >
      <>

        <section className="Container">
          <div className="font">
            <table class="table">
              <thead>
                <tr >
                  <th scope="col">Business name</th>
                  <th scope="col">phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Website</th>
                  <th scope="col">Shipping address</th>
                  <th scope="col">Tranding since</th>
                  <th scope="col">Businss Type</th>
                  <th scope="col">Payment</th>
                  <th scope="col">Customer name</th>
                  <th scope="col">Customer address</th>
                  <th scope="col">Customer Tele</th>
                  <th scope="col">Customer Signature</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {wCustomers.map((val, key) => {
                  return (
                    <tr style={{ backgroundColor: "mistyrose" }}>
                      <td>{val.Business_name}</td>
                      <td>{val.phone}</td>
                      <td>{val.Email}</td>
                      <td>{val.Website}</td>
                      <td>{val.Shipping_address}</td>
                      <td>{val.Tranding_since}</td>
                      <td>{val.Type_of_Businss}</td>
                      <td>{val.Preferred_Payment}</td>
                      <td>{val.Business_Representative_name}</td>
                      <td>{val.Business_Representative_address}</td>
                      <td>{val.Business_Representative_Tel}</td>
                      <td>{val.Business_Representative_Signature}</td>
                      <td width="150px">
                        <Link to={`/editWcus/${val._id}`}><button type="submit" class="btn btn-outline-secondary">
                          Update
                        </button></Link>
                        <br />
                        <br />

                        <button
                          class="btn btn-outline-success"
                          type="submit"
                          onClick={() => deleteWcus(val._id)}>
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

        <br /><br />

      </>
    </div>

  );
}

