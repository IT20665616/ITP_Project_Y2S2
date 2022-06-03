import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import "../HP_Component/StyleSheet.css";
import "../HP_Component/FormStyles.css";
import Footer from "../HP_Component/Footer";
import Header from "../HP_Component/Header";

function CashdeltUpdate() {
  const [cashdels, setcashdels] = useState([]);
  useEffect(() => {
    function getcashdels() {
      axios
        .get("http://localhost:8070/cashDel/cd")
        .then((res) => {
          setcashdels(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getcashdels();
  }, []);

  function deletecashdels(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover these details!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then(() => {
        axios.delete(`http://localhost:8070/cashDel/delete/${id}`);
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
          text: "Coulden't Delete your cash on delivery details",
          type: "error",
        });
      });

    setTimeout(() => {
      window.location.replace("http://localhost:3000/update");
    }, 5000);
  }

  return (
      <>
      <Header/>
    <section className="info-box2">
      <div className="font">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">person Name</th>
              <th scope="col">phone Number</th>
              <th scope="col">address </th>
              <th scope="col">secondary address</th>
              <th scope="col">state</th>
              <th scope="col">zip code</th>
            </tr>
          </thead>
          <tbody>
            {cashdels.map((val, key) => {
              return (
                <tr>
                  <td>{val.d_cus}</td>
                  <td >{val.dc_phone}</td>
                  <td >{val.inputAddress}</td>
                  <td >{val.inputAddress2}</td>
                  <td >{val.inputCity}</td>
                  <td >{val.inputState}</td>
                  <td >{val.inputZip}</td>
                  <td width="150px">
                    <Link to={`/cashdeledit/${val._id}`}>
                      <button type="submit" class="btn btn-outline-secondary">
                        Update
                      </button>
                    </Link>
                    <br />
                    <br />

                    <button
                      class="btn btn-outline-success"
                      type="submit"
                      onClick={() => deletecashdels(val._id)}
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
    <Footer/>
    </>
  );
}
export default CashdeltUpdate;
