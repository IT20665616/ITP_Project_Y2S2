import React,{useState,useEffect} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import img from '../../images/Customer-reviews.png';

export default function Reviews() {

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
  },[])
return(
<div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
            <div className="card-body text-center">
            <img src={img} alt="reviews" className="w-25" /> 
            </div>
            <h1 className="display-6 text-center mb-4">
                Our <b>Customer</b> Reviews
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
            <NavLink to="/ReviewUS"  className="btn btn-primary w-25 mt-4">Create Your Review</NavLink>
            <NavLink to="/ReviewUS" className="btn btn-outline-light
            rounded-pill pb-2 w-50">HELLOW CUSTOMER..!</NavLink>
            <NavLink to="/rate"  className="btn btn-primary w-25 mt-4">Give Your Rating</NavLink>


          </div>
         
          <div className="row mt-5">
            
          {Customer.map((val,key)=>{

return <div className="col-md-4">
<div className="card p-3 ">
  <div className="card-body ">
  <h5 className="card-title mb-0 fs-4 fw-bold text-justify">{val.name}
  <i className="fa fa-star-half-o fa-2x mb-2 text-primary"></i></h5>
  <h5 className="card-title mb-3 fs-6 fw-bold text-justify">{val.email}</h5>
    <p className="card-text lead">
    {val.Reviews}
    </p>
  </div>
</div>
</div>
  


})}
     
          </div>
      
        </div>
       
      </section>
    </div>
  );
};

