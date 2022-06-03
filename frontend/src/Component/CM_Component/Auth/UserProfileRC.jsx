import React, { useState,useEffect } from 'react';
import axios from "axios";
import Header from '../../HP_Component/Header';
import Footer from '../../HP_Component/Footer';
import { useNavigate } from "react-router-dom";

function UserProfileRC() {
    const [userDetails, setUserDetails] = useState({
        firstName:"",
        lastName:"",
        email:"",
        gender:"",
        address:"",
        phone:""
    });
    const history = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("auth-token");
        axios.get("http://localhost:8070/user/",{headers :{'x-auth-token':`${token}`}}).then(res =>{
            console.log(res.data);
            setUserDetails(res.data);
        })
        // .then(jsonres => setUserDetails(jsonres));
    },[]);

    function DeleteUser(){
        const token = localStorage.getItem("auth-token");
        axios.delete("http://localhost:8070/user/delete",{headers :{'x-auth-token':`${token}`}}).then(res =>{
            console.log(res.data);
            console.log("User Deleted Successfully!")
        })
    }
    
    function logOut(){
        localStorage.setItem("auth-token","");
        localStorage.setItem("userId","");

        history("/loginRC");
    }
    return (
        <div>
            <Header/>
            <div className='container'style={{marginBottom:50}}>
                <div className='row'>
                    <div className='col'>
                        <div style={{marginLeft:100, marginTop:100}}>
                            <img src={require("../../HP_Component/images/userp.jpg")} 
                            width="500px"
                            height="450px"
                            alt="profils pic" />
                        </div>
                    </div>
                    <div className='col' style={{ marginTop:50}}>
                        <h1>User Profile</h1>
                        <form>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>First Name :</label>
                                <input type="text" className="form-control" id="first-name" defaultValue={userDetails.firstName}/>
                            </div>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>Last name :</label>
                                <input type="text" className="form-control" id="last-name" defaultValue={userDetails.lastName}/>
                            </div>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>Email: </label>
                                <input type="email" className="form-control" id="email" defaultValue={userDetails.email}/>
                            </div>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>Gender :</label>
                                <input type="text" className="form-control" id="gender" defaultValue={userDetails.gender}/>
                            </div>
                            <div className="mb-3"style={{marginLeft:20, marginRight:20}}>
                                <label>Address :</label>
                                <input type="text" className="form-control" id="address" defaultValue={userDetails.address}/>
                            </div>
                            <div className="mb-3" style={{marginLeft:20, marginRight:20}}>
                                <label>Phone :</label>
                                <input type="text" className="form-control" id="phone" defaultValue={userDetails.phone}/>
                            </div>
                        </form>
                        <div className="d-grid">
                            <input type="button" value="Delete" onClick={() => DeleteUser()} className="btn btn-danger"/>
                        </div>
                        <div className="d-grid">
                            <input type="button" style={{marginTop:20}} value="Logout" onClick={() => logOut()} className="btn btn-warning"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
 
export default UserProfileRC;
