import React,{useState} from "react";
import axios from "axios";
import Header from '../HP_Component/Header'
import Footer from '../HP_Component/Footer'


export default function AddInquiry(){

    const [first_name, setFname]= useState("");
    const [last_name, setLname]= useState("");
    const [email, setEmail]= useState("");
    const [inquiry, setInquiry]= useState("");

    const sendData=async(e)=>{
        e.preventDefault();
        
        let newInquiry = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            inquiry: inquiry
        }

        axios.post("http://localhost:8070/customer_i/add",newInquiry).then(()=>{
            alert("Inquiry Added")


        }).catch((err)=>{
            alert(err)
        })
        
        setFname("");
        setLname("");
        setEmail("");
        setInquiry("");

    }
    return(
        <><Header/>
        <div className="Payment-form ">
            <div class="center"><h2>Add Inquiry</h2></div>
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="first name">First Name</label>
                    <input type="text" className="form-control" id="fname" required placeholder="Enter First Name" 
                        onChange={(e)=>{
                            setFname(e.target.value);
                        }}/>
                </div>
                <div className="form-group">
                    <label for="last name">Last Name</label>
                    <input type="text" className="form-control" id="lname" required placeholder="Enter Last Name"
                    onChange={(e)=>{
                            setLname(e.target.value);
                        }}/>
                </div>
                <div className="form-group">
                    <label for="Email">Email address</label>
                    <input type="email" className="form-control" id="Email1" required placeholder="Enter email"
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="inquiry">Inquiryt</label>
                    <input type="text" className="form-control" id="inquiry" required placeholder="Enter Your inquiry"
                    onChange={(e)=>{
                        setInquiry(e.target.value);
                    }}/>
                </div>
                <div class="centerb"><button type="submit" className="btn btn-primary">Submit</button></div>
            </form>
        </div>
        <Footer/></>

    )
}