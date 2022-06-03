import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StyleSheet.css";
import "./FormStyles.css";

function Products() {
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

  function addToCart(pro_id,pro_name,price) {
    const userId = localStorage.getItem("userId");
    const newCart ={
      productName:pro_name,
      product_id:pro_id,
      price:price,
      discount:"20",
      quantity:"1",
      userId:userId
    }

    axios.post("http://localhost:8070/cart/insertCart",newCart).then(
      res => {
        console.log(res.data);
        alert("Item Add to cart Successfully");
      }
    )
  }
  
  function addToWish(pro_id,pro_name,price) {
    const userId = localStorage.getItem("userId");
    const newWish ={
      productName:pro_name,
      product_id:pro_id,
      price:price,
      userId:userId
    }

    axios.post("http://localhost:8070/wishlist/insertWishlist",newWish).then(
      res => {
        console.log(res.data);
        alert("Item Add to wishlist Successfully");
      }
    )
  }

  return (
    <>
      <Header />
      <section className="info-box2">
        <div className="font">
          <table class="table">
            <thead>
              {products.map((val, key) => {
                return (
                  <tr>
                    <th scope="row"></th>
                    <td>
                      <img
                        src={val.imageUrl}
                        alt={val.imageUrl}
                        height="300px"
                        width="300px"
                      />
                    </td>
                    <td>
                      <br />
                      <div className="h1">
                        {val.product_name} {val.product_code}
                      </div>
                      <br />
                      {val.description}
                      <br />
                      <br />
                    </td>

                    <th scope="row"></th>
                    <th width="350px">
                      <br /> <h5>Price per Unit: LKR {val.price}</h5>
                      <br />
                      {/* quantity inputs */}
                      <label display="block" for="tentacles">
                        Enter Quantity here :{" "}
                      </label>{" "}
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="100"
                        defaultValue="1"
                      ></input>
                      <br />
                      <br />
                        <button className="btn1" onClick={() => addToCart(val._id,val.product_name,val.price)}>
                          <span>
                            Add to cart{" "}
                            <img
                              src={require("./images/cart.png")}
                              height="30px"
                              width="30px"
                            />
                          </span>
                        </button>
                        <button className="btn1" onClick={() => addToWish(val._id,val.product_name,val.price)}>
                          <span>
                            Add to wishlist{" "}
                            <img
                              src={require("./images/wishlist.png")}
                              height="30px"
                              width="30px"
                            />
                          </span>
                        </button>

                      <br />
                      <br />
                    </th>
                  </tr>
                );
              })}
            </thead>
          </table>
        </div>
      </section>

      {/* navigates to home */}
      <Link to="/">
        <center>
          <img src={require("./images/home.png")} height="70px" width="70px" />
        </center>
        <br />
      </Link>
      <Footer />
    </>
  );
}

export default Products;
