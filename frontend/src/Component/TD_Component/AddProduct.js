import React,{useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../DS_Component/Footer";
import Navbar from "../DS_Component/Navbar";



export default function AddProduct(props){

    const [productCode,setProductCode]=useState("");
    const [productName,setProductName]=useState("");
    const [description,setDescription]=useState("");
    const [quantity,setQuantity]=useState("");
    const [damagedQuantity,setDamagedQuantity]=useState("");

   const sendData=async(e)=>{
        e.preventDefault();
        
        let newProduct ={

            productCode:productCode,
            productName:productName,
            description:description,
            quantity:quantity,
            damagedQuantity:damagedQuantity

        }
        
        axios.post("http://localhost:8070/products/add",newProduct).then(()=>{

            Swal.fire({
                title: 'Success!',
                text: 'Product added to Inventory',
                icon: 'success',
                showConfirmButton:false,
              });
            
        }).catch((err)=>{

            Swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                type: "error",
              });
        })


        setTimeout(()=>{
            window.location.replace("http://localhost:3000/stock/product/");
          },1500)

    }
    


    return(
        <><Navbar/>
        <div className="container">
            <form onSubmit={sendData} >

            <div className="form-group">
                <label for="productCode">Product Code</label>
                <input type="text" className="form-control" id="productCode" required placeholder="Enter Product Code"
                onChange={(e)=>{
                    setProductCode(e.target.value);
                }}
                />
            </div>
            <div className="form-group">
                <label for="name">Product Name</label>
                <input type="text" className="form-control" id="name" required placeholder="Enter Product Name"
                onChange={(e)=>{
                    setProductName(e.target.value);
                }}
                />
            </div>

            <div className="form-group">
                <label for="description">Description</label>
                <input type="text" className="form-control" id="description" required placeholder="Enter Product Description"
                                onChange={(e)=>{
                                    setDescription(e.target.value);
                                }}/>
            </div>

            <div className="form-group">
                <label for="quantity">Quantity</label>
                <input type="text" className="form-control" id="quantity" required placeholder="Enter Product Quantity"
                onChange={(e)=>{
                    setQuantity(e.target.value);
                }}/>
            </div>

            <div className="form-group">
                <label for="damagedQuantity">Damaged Quantity</label>
                <input type="text" className="form-control" id="damagedQuantity"  placeholder="Enter Damaged Quantity"
                onChange={(e)=>{
                    setDamagedQuantity(e.target.value);
                }}/>
            </div>

           
            <button  type="submit" class="btn btn-primary">Submit</button>&nbsp;
            <a href="/stock/product/"><button type="button" class="btn btn-danger">Cancel</button></a>
            </form>

        </div>
        <Footer/></>

    )
}