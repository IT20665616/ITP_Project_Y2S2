import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from "axios";

const Register = () => {

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [Pno, setPno] = useState("");
  const [nic, setnic] = useState("");
  const [dob, setdob] = useState("");
  const [password, setpassword] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newprofile = {
      Fname,
      Lname,
      email,
      Pno,
      nic,
      dob,
      password,
    }
    axios.post("http://localhost:8070/Adminprofile/add", newprofile).then(() => {
      alert("Admin Registation Successfully ")
    }).catch((err) => {
      alert(err)
    })

  }



  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form order-2">
            <h1 className="display-4 fw-bolder">Hello, Admin</h1>
            <p className="lead text-center">Enter Your Details to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <form onSubmit={sendData}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="firstname"
                  onChange={(e) => {
                    setFname(e.target.value);
                  }
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastname"
                  name="lastname"
                  onChange={(e) => {
                    setLname(e.target.value);
                  }
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }
                  }
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="pno" className="form-label">
                  Contact No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pno"
                  name="pno"
                  onChange={(e) => {
                    setPno(e.target.value);
                  }
                  }
                />
                <div id="emailHelp" className="form-text">
                  contact no  is must have be numbers.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="NIC" className="form-label">
                  NIC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="NIC"
                  name="NIC"
                  onChange={(e) => {
                    setnic(e.target.value);
                  }
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="DOB" className="form-label">
                  DOB
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="DOB"
                  name="DOB"
                  onChange={(e) => {
                    setdob(e.target.value);
                  }
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }
                  }
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button type="submit" className="btn btn-outline-primary w-100 mt-4 rounded-pill">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
