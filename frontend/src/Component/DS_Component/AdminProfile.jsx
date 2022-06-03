import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";
import img from '../../images/Admin.jpg';
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Adminprofile() {

    const [profile, setprofile] = useState([]);

    useEffect(() => {
        function getprofile() {
            axios.get("http://localhost:8070/Adminprofile/").then((res) => {
                setprofile(res.data);
                console.log(res)
            }).catch((err) => {
                alert(err);
            })
        }
        getprofile();
    },


        [])



    function Deleteprofile(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover these details!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(() => {
            axios.delete(`http://localhost:8070/Adminprofile/delete/${id}`)
            swal({
                title: "Success!",
                text: "Deleted record Successfully",
                icon: "success",
                timer: 2000,
                button: false,
            });
        }).catch((err) => {
            swal({
                title: "Error!",
                text: "Coulden't Delete your Product",
                type: "error",
            });

        });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/update");
        }, 7000);


    };

    return (
        <div><Navbar/>
            <section id="about">
                <div className="container my-4 py-4">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} alt="About" className="w-100" />
                        </div>



                        {profile.map((val, key) => {

                            return <div className="col-md-5">

                                <h1 className="display-4 mb-2"><b>Admin </b> Profile</h1><hr />
                                <hr className="w-50" />

                                <p className="lead fs-4 mb-10">
                                    .</p>
                                <pre className="lead fs-4 mb-10">
                                    <b>First Name  :</b>{val.Fname} </pre>
                                <pre className="lead fs-4 mb-10">
                                    <b>Last Name   :</b>{val.Lname}</pre>
                                <pre className="lead fs-4 mb-10">
                                    <b>Email       :</b>{val.email}</pre>
                                <pre className="lead fs-4 mb-10">
                                    <b>Contact No  :</b>{val.Pno}</pre>
                                <pre className="lead fs-4 mb-10">
                                    <b>NIC         :</b>{val.nic}</pre>
                                <pre className="lead fs-4 mb-10">
                                    <b>DOB         :</b>{val.dob}</pre>
                                <pre className="lead fs-4 mb-10">
                                    .</pre>


                                <NavLink to={`/EditProfile/${val._id}`}><button type="submit" className="btn btn-primary rounded-pill px-4 py-2">
                                    UPDATE </button></NavLink>
                                <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2"
                                    onClick={() => Deleteprofile(val._id)}>DELETE</button>


                            </div>

                        })}

                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}
