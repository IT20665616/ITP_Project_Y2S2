import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import Footer from "../DS_Component/Footer";
import Navbar from "../DS_Component/Navbar";

export default function UpdateProducts(props) {

  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [damagedQuantity, setDamagedQuantity] = useState("");

  const { id } = useParams();


  useEffect(() => {
    function getProduct() {
      axios.get(`http://localhost:8070/products/get/${id}`).then((res) => {

        if (res.data.status) {
          setProductCode(res.data.product.productCode);
          setProductName(res.data.product.productName);
          setDescription(res.data.product.description);
          setQuantity(res.data.product.quantity);
          setDamagedQuantity(res.data.product.damagedQuantity);
        }
      }).catch((err) => {

        alert(err);
      });
    }

    getProduct();
  }, []);

  function update(e) {

    e.preventDefault();

    const data = {
      productCode,
      productName,
      description,
      quantity,
      damagedQuantity
    };

    axios.put(`http://localhost:8070/products/update/${id}`, data).then(() => {

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
      window.location.replace("http://localhost:3000/stock/product");
    }, 2500)
  }

  return (
    <><Navbar />
      <br /><br /><br />

      <div className="container">
        <form onSubmit={update} >

          <div className="form-group">
            <label for="productCode">Product Code</label>
            <input type="text" className="form-control" id="productCode" required defaultValue={productCode}
              onChange={(e) => {
                setProductCode(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="name">Product Name</label>
            <input type="text" className="form-control" id="name" required defaultValue={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label for="description">Description</label>
            <input type="text" className="form-control" id="description" required defaultValue={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }} />
          </div>

          <div className="form-group">
            <label for="quantity">Quantity</label>
            <input type="text" className="form-control" id="quantity" readOnly defaultValue={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }} />
          </div>

          <div className="form-group">
            <label for="damagedQuantity">Damaged Quantity</label>
            <input type="text" className="form-control" id="damagedQuantity" required defaultValue={damagedQuantity}
              onChange={(e) => {
                setDamagedQuantity(e.target.value);
              }} />
          </div>


          <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
          <a href="/stock/product/"><button type="button" class="btn btn-danger">Cancel</button></a>
        </form>

      </div>
      <br /><br /><br />
      <Footer /></>

  )



}