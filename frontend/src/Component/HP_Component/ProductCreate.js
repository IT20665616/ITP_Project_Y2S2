import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import axios from "axios";
import Footer from "../DS_Component/Footer";
import Navbar from "../DS_Component/Navbar";
import "./StyleSheet.css";
import "./FormStyles.css";

function ProductCreate() {
  const [product_name, setName] = useState("");
  const [product_code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newProduct = {
      product_name,
      product_code,
      description,
      imageUrl: imageUrl,
      price,
    };

    axios
      .post("http://localhost:8070/Product/add", newProduct)
      .then(() => {
        swal({
          title: "Success!",
          text: "Inserted Successfully",
          icon: "success",
          timer: 2000,
          button: false,
        });
      })
      .catch((err) => {
        swal({
          title: "Error!",
          text: "Coulden't Add your Product",
          type: "error",
        });
      });

    setTimeout(() => {
      window.location.replace("http://localhost:3000/producthome");
    }, 2000);

    setName("");
    setCode("");
    setDescription("");
    setImageUrl("");
    setPrice("");
  }

  return (
    <>
    <Navbar/>
      <section className="get-in-touch">
        <div className="font">
          <b>
            <div className="title">
              <h1>ADD NEW PRODUCT</h1>
            </div>
            <br />
            <br />
            <form onSubmit={sendData}>
              <div class="form-group">
                <label for="name">Product name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  required
                  placeholder="Ex: play house"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="code">Product code</label>
                <input
                  type="codet"
                  class="form-control"
                  id="code"
                  required
                  pattern="[0-2]{0,9}"
                  placeholder="Ex: 001"
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="5"
                  required
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <br />
              <div class="upload-btn-wrapper">
                <FileBase64
                  type="file"
                  name="imageUrl"
                  multiple={false}
                  onDone={({ base64 }) => setImageUrl(base64)}
                />
              </div>
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
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <button type="submit" class="btn btn-outline-success">
                Add
              </button>{" "}
              {"  "}
              <button type="reset" class="btn btn-outline-success">
                Clear
              </button>
            </form>
          </b>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default ProductCreate;
