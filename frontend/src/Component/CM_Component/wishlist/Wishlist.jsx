import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../HP_Component/Header';
import Footer from '../../HP_Component/Footer';
import { Link } from "react-router-dom";

function Wishlist() {
    const [listItems, setListItems] = useState([]);
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        axios.get("http://localhost:8070/wishlist/" + userId).then(res => {
            console.log(res.data);
            setListItems(res.data);
        })
        // .then(jsonres => setUserDetails(jsonres));
    }, []);

    function deleteItem(listId) {
        axios.delete("http://localhost:8070/wishlist/delete/" + listId).then(res => {
            console.log(res.data);
            console.log("List Item Deleted Successfully!")
        })
        window.location.reload();
    }
    return (
        <div>
            <Header />
                <div className="info-box6" style={{ marginTop: 50, backgroundColor:'whitesmoke' }} >
                    <div className="font"></div>
                            <center><h3>My Wishlist</h3><br /></center>
                            <table id="my-table" class="table">
                                <thead className="table-active">
                                    <tr>
                                        <th width="300px">Product Name</th>
                                        <th>Product Code</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {listItems.map(list =>
                                    <tr>
                                        <td >{list.productName}</td>
                                        <td >#{list.productCode}</td>
                                        <td>
                                            <img
                                                src={list.image}
                                                alt={list.image}
                                                height="200px"
                                                width="200px"
                                            />
                                        </td>
                                        <td>{list.price}</td>
                                        <td><button className="btn btn-danger" style={{ color: '#e80707' }} onClick={() => deleteItem(list._id)}>REMOVE</button></td>
                                    </tr>
                                )}
                            </table>
                            </div>

                            <div className="d-grid" style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
                                <Link to="/products" className="btn btn-warning">
                                    Continue Shopping
                                </Link>
                            </div>

                       
                    <Footer />
                </div>
            )
}

            export default Wishlist
