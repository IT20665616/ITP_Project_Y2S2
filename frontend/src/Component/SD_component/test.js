//import React from "react";
import React,{useState} from "react";
import axios from "axios";
import swal from "sweetalert";
export default function Test1(){

  const [d_cus,setd_cus]=useState("");
  const [dc_phone,setdc_phone]=useState("");
  const [inputAddress,setinputAddress]=useState("");
  const [inputAddress2,setinputAddress2]=useState("");
  const [inputCity,setinputCity]=useState("");
  const [inputState,setinputState]=useState("");
  const [inputZip,setinputZip]=useState("");
  const sendData = async (e) => {
      e.preventDefault();

      
      
      let newcashDel = {

          
          
           d_cus:d_cus,
           dc_phone:dc_phone,
           inputAddress:inputAddress,
           inputAddress2:inputAddress2,
           inputCity:inputCity,
           inputState:inputState,
           inputZip:inputZip
      }

  
      axios.post("http://localhost:8070/cashDel/cdadd",newcashDel)
      .then(()=>{
        swal({
          title: "Success!",
          text: "Add Cash On Delivery Details Successfully",
          icon: "success",
          timer: 200,
          button: false,
        });
         
          window.location = "/cashupdate"
      }).catch((err)=>{
          alert("error in cash del frontend route")
      })
   


      
      setd_cus("");
      setdc_phone("");
      setinputAddress("");
      setinputAddress2("");
      setinputCity("");
      setinputState("");
      setinputZip("");
     
  }

    return(
        <div className="container">

          

            <div className="container">
                <h1 >Cash On Delivary Details</h1>
                
                </div>
            



            <form onSubmit={sendData} className="row g-3">
       
       
        <div className="col-md-6">
          <label htmlFor="d_cus" className="form-label">customer name</label>
          <input type="text" className="form-control" id="d_cus"
            onChange={(e)=>{
              setd_cus(e.target.value);
    
            }}/>
        </div>



        <div className="col-md-6">
          <label htmlFor="dc_phone" className="form-label">customer phone number</label>
          <input type="text" className="form-control" id="dc_phone"
            onChange={(e)=>{
              setdc_phone(e.target.value);
    
            }}/>
        </div>



        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"
            onChange={(e)=>{
              setinputAddress(e.target.value);
    
            }}/>
        </div>



        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
            onChange={(e)=>{
              setinputAddress2(e.target.value);
    
            }}/>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity"
            onChange={(e)=>{
              setinputCity(e.target.value);
    
            }}/>
        </div>



        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">State</label>
          <input type="text" className="form-control" id="inputState"
            onChange={(e)=>{
              setinputState(e.target.value);
    
            }}/>
        </div>



        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip"
          onChange={(e)=>{
            setinputZip(e.target.value);
  
          }}/>
        </div>





       
        <div className="col-12">

          <center>  <button type="submit" className="btn btn-primary">proceed delivery</button></center>
        
        </div>
      </form>
      </div>
        
    )

}
