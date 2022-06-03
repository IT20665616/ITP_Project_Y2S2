import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import Footer from "../DS_Component/Footer";
import Navbar from "../DS_Component/Navbar";
import "./StyleSheet.css";
import "./FormStyles.css";
import jsPdf from 'jspdf'
import 'jspdf-autotable'



function ProductUpdate() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        function getProducts() {
            axios
                .get("http://localhost:8070/product/")
                .then((res) => {
                    setProducts(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getProducts();
    }, []);

    function deleteProduct(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover these details!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(() => {
                axios.delete(`http://localhost:8070/product/delete/${id}`);
                swal({
                    title: "Success!",
                    text: "Deleted record Successfully",
                    icon: "success",
                    timer: 2000,
                    button: true,
                });
            })
            .catch((err) => {
                swal({
                    title: "Error!",
                    text: "Coulden't Delete your Product",
                    type: "error",
                });
            });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/productupdate");
        }, 4000);
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
        doc.save("Current Products.pdf");
    }


    return (
        <><Navbar />
            <section className="table-box">
                <div className="font">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product code</th>
                                <th scope="col">Product name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((val, key) => {
                                return (
                                    <tr>
                                        <th scope="row">{val.product_code}</th>
                                        <td>{val.product_name}</td>
                                        <td width="500px">{val.description}</td>
                                        <td>
                                            <img
                                                src={val.imageUrl}
                                                alt={val.imageUrl}
                                                height="200px"
                                                width="200px"
                                            />
                                        </td>
                                        <td width="100px">{val.price}</td>
                                        <td width="150px">
                                            <Link to={`/editcontent/${val._id}`}><button type="submit" class="btn btn-outline-secondary">
                                                Update
                                            </button></Link>
                                            <br />
                                            <br />

                                            <button
                                                class="btn btn-outline-success"
                                                type="submit"
                                                onClick={() => deleteProduct(val._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}





                            {/* <tr>
                            <th scope="row">#005</th>
                            <td>6 Pannel playpen</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
                                purus lectus, sed aliquam enim mattis et. Sed vitae risus vitae odio ornare
                                varius. Curabitur facilisis sem in gravida ultrices. Duis et interdum ligula,
                                ut finibus sapien.</td>
                            <td><img src={require('./images/6panel.jpeg')} height="200px" width="200px" /></td>
                            <td>
                                <br/>
                                <button type="submit" class="btn" >Update</button><br/><br/>
                                <button type="submit" class="btn">Delete</button>
                            </td>

                        </tr>
                        <tr>
                            <th scope="row">#006</th>
                            <td>Play House</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
                                purus lectus, sed aliquam enim mattis et. Sed vitae risus vitae odio ornare
                                varius. Curabitur facilisis sem in gravida ultrices. Duis et interdum ligula,
                                ut finibus sapien.</td>
                            <td><img src={require('./images/playhouse.jpeg')} height="200px" width="200px" /></td>
                            <td>
                                <br/>
                                <button type="submit" class="btn" >Update</button><br/><br/>
                                <button type="submit" class="btn">Delete</button>
                            </td>

                        </tr> */}
                        </tbody>
                    </table>
                </div>
            </section><br/>
            <div className="d-grid" style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
                <input type="button" value="Print Pdf" onClick={() => jsPdfGenerator()} className="btn btn-warning" />
            </div><br/>
            <Footer />
            </>
            );
}
    
    
export default ProductUpdate;
