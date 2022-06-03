import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import axios from "axios";
import "./StyleSheet.css";
import "./FormStyles.css";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


function EditProfile(props) {

    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [email, setemail] = useState("");
    const [Pno, setPno] = useState("");
    const [nic, setnic] = useState("");
    const [dob, setdob] = useState("");

    const { id } = useParams();

    useEffect(() => {
        function getprofile() {
            axios
                .get(`http://localhost:8070/Adminprofile/get/${id}`)
                .then((res) => {

                    if (res.data.Status) {

                        setFname(res.data.profile.Fname);
                        setLname(res.data.profile.Lname);
                        setemail(res.data.profile.email);
                        setPno(res.data.profile.Pno);
                        setnic(res.data.profile.nic);
                        setdob(res.data.profile.dob);
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getprofile();
    }, []);


    function update(e) {
        e.preventDefault();


        const data = {
            Fname,
            Lname,
            email,
            Pno,
            nic,
            dob,
        };

        axios
            .put(`http://localhost:8070/Adminprofile/update/${id}`, data)
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
                    text: "Coulden't UPDATE your Profile",
                    type: "error",
                });
            });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/update");
        }, 2500);

    }

    return (
        <>
            <Navbar />
            <section className="get-in-touch">
                <div className="container my-15 py-15">
                    <div className="font">
                        <b>
                            <div className="title">
                                <h1 align="center">Update Profile</h1>
                            </div>
                            <br />
                            <br />
                            <form onSubmit={update}>
                                <div class="form-group">
                                    <label for="fname">First Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="fname"
                                        required
                                        value={Fname}
                                        onChange={(e) => {
                                            setFname(e.target.value);
                                        }}
                                    />
                                </div><br />
                                <div class="form-group">
                                    <label for="Lname">Last  Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="Lname"
                                        required
                                        value={Lname}
                                        onChange={(e) => {
                                            setLname(e.target.value);
                                        }}
                                    />
                                </div><br />
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="email"
                                        required
                                        value={email}
                                        onChange={(e) => {
                                            setemail(e.target.value);
                                        }}
                                    />
                                </div><br />
                                <div class="form-group">
                                    <label for="pno">Contact No</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="pno"
                                        required
                                        value={Pno}
                                        onChange={(e) => {
                                            setPno(e.target.value);
                                        }}
                                    />
                                </div><br />
                                <div class="form-group">
                                    <label for="nic">NIC</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="nic"
                                        required
                                        value={nic}
                                        onChange={(e) => {
                                            setnic(e.target.value);
                                        }}
                                    />
                                </div><br />
                                <div class="form-group">
                                    <label for="dob">DOB</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="dob"
                                        required
                                        value={dob}
                                        onChange={(e) => {
                                            setdob(e.target.value);
                                        }}
                                    />
                                </div><br />
                                <center>
                                    <button type="submit" class="btn btn-outline-success">
                                        Update Data
                                    </button></center>
                                <br />
                            </form>
                        </b>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default (EditProfile);