import React, { useState } from "react";
import img from '../../images/contact.png';
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";



const ReviewUS = () => {

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [Reviews, setReviews] = useState("");
  const [contactno, setcontactno] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newCustomer = {
      name,
      email,
      Reviews,
      contactno,
    }
    axios.post("http://localhost:8070/customer/add", newCustomer).then(() => {
      alert("Review Added ")
    }).catch((err) => {
      alert(err)
    })

  }




  return (
    <div>
      <Navbar/>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Review Us</h3>
              <h1 className="display-6 text-center mb-4">
                Give Your <b>Review</b>
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={img} alt="Contact" className="w-75" />
            </div>
            <div className="col-md-6">
              <form onSubmit={sendData}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="John Smith"
                    onChange={(e) => {
                      setName(e.target.value);
                    }
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    name="email"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"

                    onChange={(e) => {
                      setReviews(e.target.value);
                    }
                    }
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Contact No </label>
                  <input type="phone"
                    class="form-control"
                    id="phone"
                    placeholder="07XXXXXXXX"
                    onChange={(e) => {
                      setcontactno(e.target.value);
                    }
                    }
                  />
                </div>
                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Review <i className="fa fa-paper-plane ms-2"></i></button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ReviewUS;
