import React, { useState } from "react";
import axios from "axios";


export default function CreateWCus(props) {
  const [firstName, setFname] = useState("");
  const [LastName, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Username, setuname] = useState("");
  const [CreatePW, setcreateP] = useState("");
  const [ConfirmPW, setConfirmp] = useState("");

  function sendData(e) {
    e.preventDefault();

    const NewCreateCus = {
      firstName,
      LastName,
      Email,
      Username,
      CreatePW,
      ConfirmPW
    }

    axios.post("http://localhost:8070/CreateWcus/Create", NewCreateCus).then(() => {
      alert("Successfully Cretated");
      setTimeout(() => {
        window.location.replace("http://localhost:3000/homeWC");
    }, 500);
    }).catch((err) => {
      alert(err)
    })
  }


  return (

    <center>
      <div style={{ backgroundColor: 'white' }}>
        <div id='CreateWCus'  >

          <div className='container'  >
            <div className='row login-box'>
              <div className='col-lgt 7 dg-color align-self-center'>
                <div>

                </div>

              </div>
            </div>
          </div>
        </div>
        <div className='form-section' >
       
              <img
                src={require("./images/login2.jpeg")}
               alt=""
                width="400px"
                height="400px"
              ></img>
           
          <h3 style={{color:"black"}}><b>Log-in</b></h3>
        </div>
        <div className='login-inner-form'>

          <form onSubmit={sendData}>
            <div className='form-group form box'>
              <label for="Fname" class="col-sm-2 col-form-label">First name  :</label>
              <input type="text" id='Fname' className='input-text' placeholder='First name'
                onChange={(e) => {
                  setFname(e.target.value);
                }}></input>
            </div>
            <div className='form-group form box'>
              <label for="Fname" class="col-sm-2 col-form-label">Last name  :</label>
              <input type="text" id='lname' className='input-text' placeholder='Last name'
                onChange={(e) => {
                  setLname(e.target.value);
                }}></input>
            </div>

            <div className='form-group form box'>
              <label for="Fname" class="col-sm-2 col-form-label">Email :</label>
              <input type="text" id='email' className='input-text' placeholder='E-mail'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}></input>
            </div>

            <div className='form-group form box'>
              <label for="Fname" class="col-sm-2 col-form-label">User name :</label>
              <input type="text" id='Uname' className='input-text' placeholder='User Name'
                onChange={(e) => {
                  setuname(e.target.value);
                }}></input>
            </div>

            <div className='form-group form box'>
              <label for="Fname" class="col-sm-2 col-form-label">Create Password :</label>
              <input type="Password" id='PassWord' className='input-text' placeholder='Create Password'
                onChange={(e) => {
                  setcreateP(e.target.value);
                }} pattern="(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}"
                 title="Must contain at least one number
                 and one uppercase and lowercase letter, 
                 and at least 8 or more characters" required/>
            </div>

            <div className='form-group'>
              <button style={{ backgroundColor: "cadetblue", color: "Black", width: "200px", height: "50px" }}>
                Sign-Up
              </button><br></br>
            </div>

          </form>
          <div id="message">
              <h5>Password must contain the following:</h5>
              <p id="letter" class="invalid" style={{fontcolor:"gray"}}>A <b>lowercase</b> letter</p>
              <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
              <p id="number" class="invalid">A <b>number</b></p>
              <p id="length" class="invalid">Minimum <b>8 characters</b></p>
          </div>
        </div>
      </div>

    </center>


  );


}