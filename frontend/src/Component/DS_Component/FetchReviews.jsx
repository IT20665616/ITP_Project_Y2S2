import React,{useState,useEffect} from "react";
import axios from "axios";

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
    },[])
return(

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
            <td><button type="button" class="btn btn-outline-success">Update</button>&nbsp;<button type="button" class="btn btn-outline-danger">Delete</button>
</td>

        </tr>


    })}
            

   
  </tbody>
</table>
</div>

)


}