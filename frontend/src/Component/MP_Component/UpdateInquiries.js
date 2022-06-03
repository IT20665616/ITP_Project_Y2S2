import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Header from '../HP_Component/Header'
import Footer from '../HP_Component/Footer'

export default function UpdateInquiries(props) {

    const [first_name, setFname] = useState("");
    const [last_name, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [inquiry, setInquiry] = useState("");

    const { id } = useParams();

    useEffect(() => {
        function getInquirys() {
            axios.get(`http://localhost:8070/customer_i/get/${id}`).then((res) => {

                if (res.data.status) {
                    setFname(res.data.customer.first_name);
                    setLname(res.data.customer.last_name);
                    setEmail(res.data.customer.email);
                    setInquiry(res.data.customer.inquiry);
                }
            }).catch((err) => {
                alert(err);
            });
        }
        getInquirys();
    }, []);

    function update(e) {

        e.preventDefault();

        const data = {
            first_name,
            last_name,
            email,
            inquiry
        };

        axios.put(`http://localhost:8070/customer_i/update/${id}`, data).then(() => {

            swal.fire({
                title: "Success!",
                text: "Updated Successfully",
                icon: "success",
                button: false,
            });

        }).catch((err) => {
            swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                icon: "error",
            });
        });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/alli");
        }, 2500)
    }

    return (
        <><Header />

            <div className="container">

                <form onSubmit={update}>

                    <div className="form-group">
                        <label for="first name">First Name</label>
                        <input type="text" className="form-control" id="fname" required defaultValue={first_name}
                            onChange={(e) => {
                                setFname(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label for="last name">Last Name</label>
                        <input type="text" className="form-control" id="lname" required defaultValue={last_name}
                            onChange={(e) => {
                                setLname(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label for="Email">Email address</label>
                        <input type="email" className="form-control" id="Email1" required defaultValue={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label for="complaint">Inquiry</label>
                        <input type="text" className="form-control" id="complaint" required defaultValue={inquiry}
                            onChange={(e) => {
                                setInquiry(e.target.value);
                            }} />
                    </div>
                    <div class="centerb"><button type="submit" className="btn btn-primary">Submit</button></div>
                </form>
            </div>
            <Footer /></>
    )


}