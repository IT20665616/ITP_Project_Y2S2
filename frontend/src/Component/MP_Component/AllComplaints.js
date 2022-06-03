import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Header from '../HP_Component/Header';
import Footer from '../HP_Component/Footer';

export default function AllComplaints(){

    const [customers, setCustomers] = useState([]);

    useEffect(() =>{
            function getComplaints() {
                axios.get("http://localhost:8070/customer/").then((res)=>{
                    setCustomers(res.data);
                }).catch((err)=>{
                    alert(err.message);
                })
            }
            getComplaints();
    },[])

    function deleteComplaint(id){
        Swal.fire({
            title: 'Are You Sure?',
            text: 'Once deleted, You will not able to recover these details !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#30085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'

        }).then((res)=>{
            if(res.isConfirmed)
            {axios.delete(`http://localhost:8070/customer/delete/${id}`);
            Swal.fire({
                title: 'Success!',
                text: 'Delete Complaint Successfully',
                icon: 'success',
                showConfirmButton: false,
                
        });}
    }).catch((err)=>{
        Swal.fire({
            title: 'Error!',
            text: "Couldn't delete your Details",
            icon: 'error',
    });
    });

    setTimeout(()=>{
        window.location.replace("http://localhost:3000/allc");
    },3000)

}
    return(
        <><Header/>
        <div className="Payment-form ">
            <br/>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Complaint</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {customers.map((val,key)=>{
                    return <tr>
                        <td>{val.first_name}</td>
                        <td>{val.last_name}</td>
                        <td>{val.email}</td>
                        <td>{val.complaint}</td>
                        <td>
                            <Link to={`/UpdateC/${val._id}`}><button type="button" class="btn btn-outline-success">Update</button></Link>&nbsp;
                            <button onClick={()=>deleteComplaint(val._id)} type="button" class="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>

                })}
                </tbody>
                </table>
        </div>
        <Footer/></>
    )

}