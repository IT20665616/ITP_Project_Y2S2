import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../HP_Component/Header';
import Footer from '../../HP_Component/Footer';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import jsPdf from 'jspdf'
import 'jspdf-autotable'

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        axios.get("http://localhost:8070/cart/" + userId).then(res => {
            console.log(res.data);
            setCartItems(res.data);
        })
        // .then(jsonres => setUserDetails(jsonres));
    }, []);

    function decrementCount(id) {

        const exist = cartItems.find((item) => item._id === id);
        const quantity = exist.quantity - 1;
        if (exist) {
            const newQty = {
                quantity: quantity
            };

            axios.put('http://localhost:8070/cart' + `/update/${id}`, newQty);

            //Display a toast message
            toast('Product count is decreased by 1', { position: toast.POSITION.BOTTOM_RIGHT });
            window.location.reload();
        }
    }

    //Update the count by increasing the qty by 1
    function incrementCount(id) {

        const exist = cartItems.find((item) => item._id === id);

        if (exist) {
            const quantity = exist.quantity + 1;
            const newQty = {
                quantity: quantity
            };

            axios.put('http://localhost:8070/cart' + `/update/${id}`, newQty);

            //Display a toast message
            toast('Product count is increased by 1', { position: toast.POSITION.BOTTOM_RIGHT });
            window.location.reload();
        }
    }

    function calculateTot() {
        let total = 0;
        cartItems.map(Cart =>
            total = total + (Cart.quantity * Cart.price)
        );
        return total
    }

    function deleteItem(cartId) {
        axios.delete("http://localhost:8070/cart/delete/" + cartId).then(res => {
            console.log(res.data);
            console.log("Cart Item Deleted Successfully!")
        })
        window.location.reload();
    }

    //pdf generating
    function jsPdfGenerator() {

        //new document in jspdf
        var doc = new jsPdf('p', 'pt');


        doc.autoTable({ html: '#my-table' })

        doc.autoTable({
            columnStyles: { europe: { halign: 'center' } },
            margin: { top: 10 },
        })

        //save the pdf
        doc.save("Cart.pdf");
    }


    return (
        <div>
            <Header />
            <div className="info-box6" style={{ marginTop: 50, backgroundColor:'whitesmoke' }} >
                <div className="font">
                <center><h3>My Cart</h3><br/></center>
                    <table class="table">
                        <thead className="table-active">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Code</th>
                                <th>Quantity</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Remove item</th>
                            </tr>
                        </thead>
                        {cartItems.map(Cart =>
                            <tr>
                                <td >{Cart.productName}</td>
                                <td >#{Cart.productCode}</td>
                                <td>
                                    <button onClick={() => decrementCount(Cart._id)} style={{ color: '#000000' }} className="btn btn-dark">-</button>{/*Decrement*/}
                                    <label className="text-center fs-5 fw-bolder" name="qty" style={{ width: 30, height: 30 }} value={Cart.quantity} >{Cart.quantity}</label>
                                    <button onClick={() => incrementCount(Cart._id)} style={{ color: '#000000', marginLeft: 5 }} className="btn btn-dark">+</button>{/*Decrement*/}
                                </td>
                                <td>
                                    <img
                                        src={Cart.image}
                                        alt={Cart.image}
                                        height="200px"
                                        width="200px"
                                    />
                                </td>
                                <td>{Cart.price}</td>
                                <td><button className="btn btn-danger" style={{ color: '#e80707' }} onClick={() => deleteItem(Cart._id)}>REMOVE</button></td>
                            </tr>
                        )}
                        <tr>
                            <td>total</td>
                            <td>{calculateTot()}</td>
                        </tr>
                    </table>
                    <Link to="/payment">
                        <div className="d-grid" style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
                            <input type="button" value="Checkout" className="btn btn-success" />

                        </div>
                    </Link>
                </div>
            </div>
            <div className="d-grid" style={{ marginLeft: 100, marginRight: 100, marginTop: 20 }}>
                <input type="button" value="Print Pdf" onClick={() => jsPdfGenerator()} className="btn btn-warning" /><br /><br />
            </div>
            <Footer />
        </div>
    )
}

export default Cart;
