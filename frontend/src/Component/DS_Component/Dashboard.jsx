
import { NavLink } from 'react-router-dom';
import React,{useState,useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";
export default function FetchReviews() {

    const [Customer,setCustomer]= useState([]);

    useEffect(()=>{
         function getCustomer(){
             axios.get("http://localhost:8070/customer/").then((res)=>{
            setCustomer(res.data);
            console.log(res)
             }).catch((err)=>{
                 alert(err);
             })
         }
         getCustomer();
    },

    
    [])

    function DeleteCustomer(id) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover these details!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then(() => {
            axios.delete(`http://localhost:8070/customer/delete/${id}`)
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
    };
return(



        <div>

            <div class="container-fluid mb-5">
                <div class="row">
                    <nav id="sidebarMenu"
                        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div class="position-sticky pt-3">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                <NavLink  to='/AdminProfile' class="nav-link active" aria-current="page" >
                                        <i className="fa fa-user me-2"></i>
                                        Profile
                                        </NavLink>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                    <i className="fa fa-file me-2"></i>
                                        Orders
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                       
                                        <i className="fa fa-shopping-cart me-2"></i>
                                        Products
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <i className="fa fa-users me-2"></i>
                                        Customers
                                    </a>
                                </li>
                                <li class="nav-item">
                                <NavLink  to='/dashboard' class="nav-link" >
                                    <i className="fa fa-star me-2"></i>
                                        Reviews
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                         <i className="fa fa-bar-chart me-2"></i>
                                        Reports
                                    </a>
                                </li>
                               
                            </ul>

                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Saved reports</span>
                                <a class="link-secondary" href="#" aria-label="Add a new report">
                                    <span data-feather="plus-circle"></span>
                                </a>
                            </h6>
                            <ul class="nav flex-column mb-2">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Current month
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Last quarter
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Social engagement
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="file-text"></span>
                                        Year-end sale
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Dashboard</h1>
                            <div class="btn-toolbar mb-2 mb-md-0">
                                <div class="btn-group me-2">
                                
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Report</button>
                                    <NavLink  to='/FileUploard'  class="btn btn-sm btn-outline-secondary">Upload </NavLink>
                                </div>
                                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar"></span>
                                    This week
                                </button>
                            </div>
                        </div>

                        
                        <h2>Customer Reviews</h2>
                        <div className="container">


    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Review</th>
      <th scope="col">Contact No </th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {Customer.map((val,key)=>{

       return <tr>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.Reviews}</td>
            <td>{val.contactno}</td>
            <td><button type="button" 
            class="btn btn-outline-danger"
             href="#" onClick={() => DeleteCustomer(val._id)}>Delete</button>
</td>

        </tr>


    })}
            

   
  </tbody>
</table>
</div>
                    </main>
                </div>
            </div>
        </div>
    );
}
