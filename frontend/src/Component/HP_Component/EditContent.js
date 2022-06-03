import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import axios from "axios";
import Header from "./Header";
import "./StyleSheet.css";
import "./FormStyles.css";
import Footer from "./Footer";
import { useParams } from "react-router-dom";


function EditContent(props) {
    const [product_name, setName] = useState("");
    const [product_code, setCode] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    const { id } = useParams();

    useEffect(() => {
        function getProduct() {
            axios
                .get(`http://localhost:8070/product/get/${id}`)
                .then((res) => {

                    if (res.data.Status) {
                        setName(res.data.Product.product_name);
                        setCode(res.data.Product.product_code);
                        setDescription(res.data.Product.description);
                        setImageUrl(res.data.Product.imageUrl);
                        setPrice(res.data.Product.price);
                    }
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getProduct();
    }, []);


    function update(e) {
        e.preventDefault();


        const data = {
            product_name,
            product_code,
            description,
            imageUrl,
            price
        };

        axios
            .put(`http://localhost:8070/product/update/${id}`, data)
            .then(() => {
                swal({
                    title: "Success!",
                    text: "UPDATED Successfully",
                    icon: "success",
                    timer: 2000,
                    button: false,
                });
            })
            .catch((err) => {
                swal({
                    title: "Error!",
                    text: "Coulden't UPDATE your Product",
                    type: "error",
                });
            });

        setTimeout(() => {
            window.location.replace("http://localhost:3000/productupdate");
        }, 2500);

    }

    return (
        <>
            <section className="get-in-touch">
                <div className="font">
                    <b>
                        <div className="title">
                            <h1 align="center">Update Product</h1>
                        </div>
                        <br />
                        <br />
                         <form onSubmit={update}> 
                            <div class="form-group">
                                <label for="name">Product name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    required
                                    value={product_name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div><br />

                            <div class="form-group">
                                <label for="code">Product code</label>
                                <input
                                    type="codet"
                                    class="form-control"
                                    id="code"
                                    required
                                    pattern="[0-2]{0,9}"
                                    value={product_code}
                                    onChange={(e) => {
                                        setCode(e.target.value);
                                    }}
                                />
                            </div><br />

                            <div class="mb-3">
                                <label for="description" class="form-label">
                                    Description
                                </label>
                                <textarea
                                    class="form-control"
                                    id="description"
                                    rows="5"
                                    required
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}
                                />
                            </div><br />

                            <label for="image" class="form-label">
                                Update Image
                            </label>
                            <center>
                                <img src={imageUrl} alt={imageUrl} height="300px" width="300px" /><br />
                                {/* <button type="reset" class="btn btn-outline-warning">Remove image</button> */}
                                <div class="upload-btn-wrapper">
                                    <FileBase64
                                        type="file"
                                        name="imageUrl"
                                        multiple={false}
                                        onDone={({ base64 }) => setImageUrl(base64)}
                                    />
                                    </div><br /><br />
                                 </center>
                            <br />

                            <div class="form-group">
                                <label for="price">Price</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="price"
                                    required
                                    placeholder="25000"
                                    pattern="[0-9]{0,5}"
                                    value={price}
                                    onChange={(e) => {
                                        setPrice(e.target.value);
                                    }}
                                />
                            </div><br />
                            <center>
                                <button type="submit" class="btn btn-outline-success">
                                    Update Data
                                </button></center>
                            <br />
                        </form>
                    </b>
                </div>
            </section>
        </>
    );
}

export default (EditContent);
