import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Footer from "../DS_Component/Footer";
import Navbar from "../DS_Component/Navbar";

export default function UpdateMaterials(props) {

  const [materialCode,setMaterialCode]=useState("");
  const [materialName,setMaterialName]=useState("");
  const [description,setDescription]=useState("");
  const [quantity,setQuantity]=useState("");
  const [reOrderingLevel,setReOrderingLevel]=useState("");
  const [reOrderingQuantity,setReOrderingQuantity]=useState("");
  const [damagedQuantity,setDamagedQuantity]=useState("");

  const { id } = useParams();


  useEffect(() => {
    function getMaterial() {
      axios.get(`http://localhost:8070/materials/get/${id}`).then((res) => {

        if (res.data.status) {
          setMaterialCode(res.data.material.materialCode);
          setMaterialName(res.data.material.materialName);
          setDescription(res.data.material.description);
          setQuantity(res.data.material.quantity);
          setReOrderingLevel(res.data.material.reOrderingLevel);
          setReOrderingQuantity(res.data.material.reOrderingQuantity);
          setDamagedQuantity(res.data.material.damagedQuantity);
        }
      }).catch((err)=>{

        alert(err);
      });
    }

    getMaterial();
  },[]);

  function update(e) {

    e.preventDefault();

    const data = {
      materialCode,
      materialName,
      description,
      quantity,
      reOrderingLevel,
      reOrderingQuantity,
      damagedQuantity
    };

    axios.put(`http://localhost:8070/materials/update/${id}`, data).then(() => {

      Swal.fire({

        title: "Success!",
        text: "Updated Successfully",
        icon: "success",
        showConfirmButton: false,
      });



    }).catch((err) => {

      Swal.fire({
        title: "Error!",
        text: "Couldn't Update your Details",
        type: "error",
      });
    });

    setTimeout(() => {
      window.location.replace("http://localhost:3000/stock/material");
    }, 2500)
  }

  return (

<><Navbar/>
<br/><br/><br/>

    <div className="container">
      <form onSubmit={update} >

      <div className="form-group">
                <label for="materialCode">Material Code</label>
                <input type="text" className="form-control" id="materialCode" required defaultValue={materialCode}
                onChange={(e)=>{
                    setMaterialCode(e.target.value);
                }}
                />
            </div>
            <div className="form-group">
                <label for="name">Material Name</label>
                <input type="text" className="form-control" id="name" required defaultValue={materialName}
                onChange={(e)=>{
                    setMaterialName(e.target.value);
                }}
                />
            </div>
            <div className="form-group">
                <label for="description">Description</label>
                <input type="text" className="form-control" id="description" required defaultValue={description}
                onChange={(e)=>{
                    setDescription(e.target.value);
                }}
                />
            </div>

            <div className="form-group">
                <label for="quentity">Quantity</label>
                <input type="text" className="form-control" id="qty" readOnly defaultValue={quantity}
                                onChange={(e)=>{
                                    setQuantity(e.target.value);
                                }}/>
            </div>

            <div className="form-group">
                <label for="reOrderingLevel">Re-Ordering Level</label>
                <input type="text" className="form-control" id="reOrderingLevel" required defaultValue={reOrderingLevel}
                onChange={(e)=>{
                    setReOrderingLevel(e.target.value);
                }}/>
            </div>
            <div className="form-group">
                <label for="reOrderingQuantity">Re-Ordering Quantity</label>
                <input type="text" className="form-control" id="reOrderingQuantity" required defaultValue={reOrderingQuantity}
                onChange={(e)=>{
                    setReOrderingQuantity(e.target.value);
                }}/>
            </div>

            <div className="form-group">
                <label for="damagedQuantity">Damaged Quantity</label>
                <input type="text" className="form-control" id="damagedQuantity" required defaultValue={damagedQuantity}
                onChange={(e)=>{
                    setDamagedQuantity(e.target.value);
                }}/>
            </div>


        <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
            <a href="/stock/material/"><button type="button" class="btn btn-danger">Cancel</button></a>
      </form>

    </div>
    <br/><br/><br/>
    <Footer/></>

  )



}