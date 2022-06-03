import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../DS_Component/Footer";
import Navbar from "../DS_Component/Navbar";

export default function FetchProduct() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    function getProducts() {
      axios.get("http://localhost:8070/products/").then((res) => {
        setProducts(res.data);

      }).catch((err) => {
        alert(err);
      })
    }
    getProducts();

  }, [])

  function deleteProduct(id) {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'Once deleted, You Will Not Able To Recover These Details ! ',
      icon: 'warning',
      dangerMode: true,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete("http://localhost:8070/products/delete/" + id);
        Swal.fire({
          title: 'Success!',
          text: 'Deleted Record Successfully',
          icon: 'success',
          showConfirmButton: false,
        });
        setTimeout(() => {
          window.location.replace("http://localhost:3000/stock/product/");

        }, 1500);

      }
    }).catch((err) => {
      Swal.fire({
        title: 'Error!',
        text: "Couldn't delete your Details",
        type: 'error',
      });
    });

  }

  return (
    <><Navbar />
    <br/><br/><br/>

      <div className="container">

        <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
          <a href="/stock/material/"><button type="button" class="btn btn-outline-warning">Materials</button></a>&nbsp;
          <a href="/stock/product/"><button type="button" class="btn btn-warning">Products</button></a>

        </div>
        <br />
        <br />

        <a href="/stock/product/add"><button type="button" className="btn btn-outline-primary"> Add Product</button></a><br /><br />


        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Product Code</th>
              <th scope="col">Product Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Damaged Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((val) => {

              return <tr>
                <td>{val.productCode}</td>
                <td>{val.productName}</td>
                <td>{val.description}</td>
                <td>{val.quantity}</td>
                <td>{val.damagedQuantity}</td>
                <td>
                  <Link to={`/stock/product/update/${val._id}`}><button type="button" className="btn btn-outline-success">Update</button></Link>&nbsp;
                  <button onClick={() => deleteProduct(val._id)} type="button" className="btn btn-outline-danger">Delete</button>
                </td>

              </tr>


            })}



          </tbody>
        </table>
      </div>
      <br/><br/><br/>
      <Footer /></>

  )


}