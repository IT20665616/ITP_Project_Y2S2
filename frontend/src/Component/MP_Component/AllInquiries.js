import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from '../HP_Component/Header'
import Footer from '../HP_Component/Footer'
import jsPdf from 'jspdf'
import 'jspdf-autotable'

export default function AllInquiries() {

    const [customers_i, setCustomers_i] = useState([]);

    useEffect(() => {
        function getInquiries() {
            axios.get("http://localhost:8070/customer_i/").then((res) => {
                setCustomers_i(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getInquiries();
    }, [])
    function deleteInquiry(id) {
        Swal.fire({
            title: 'Are You Sure?',
            text: 'Once deleted, You will not able to recover these details !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'

        }).then((res) => {
            if (res.isConfirmed) {
                axios.delete(`http://localhost:8070/customer_i/delete/${id}`);
                Swal.fire({
                    title: 'Success!',
                    text: 'Delete Inquiry Successfully',
                    icon: 'success',
                    showConfirmButton: false,

                });
            }
        }).catch((err) => {
            Swal.fire({
                title: 'Error!',
                text: "Couldn't delete your Details",
                icon: 'error',
            });
        });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/alli");
        }, 3000)

    }

    //pdf generating
    function jsPdfGenerator() {

        //new document in jspdf
        var doc = new jsPdf('p', 'pt');


        doc.autoTable({ html: '.table' })

        doc.autoTable({
            columnStyles: { europe: { halign: 'center' } },
            margin: { top: 10 },
        })

        //save the pdf
        doc.save("Inquiries.pdf");
    }


    return (
        <><Header />
            <div class='container'>
                <br />
                <br />
                <br />
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Inquiry</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers_i.map((val, key) => {
                            return <tr>
                                <td>{val.first_name}</td>
                                <td>{val.last_name}</td>
                                <td>{val.email}</td>
                                <td>{val.inquiry}</td>
                                <td>
                                    <Link to={`/UpdateI/${val._id}`}><button type="button" class="btn btn-outline-success">Update</button>&nbsp;</Link>
                                    <button onClick={() => deleteInquiry(val._id)} type="button" class="btn btn-outline-danger">Delete</button>
                                </td>
                            </tr>

                        })}
                    </tbody>
                </table>
            </div><br /><br />
            <div className="d-grid" style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
                <input type="button" value="Print Pdf" onClick={() => jsPdfGenerator()} className="btn btn-warning" />
            </div>
            <br /><br />
            <Footer /></>
    )

}