import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../DS_Component/Footer";
import Navbar from "../DS_Component/Navbar";



export default function AddMaterial(props) {

    const [materialCode, setMaterialCode] = useState("");
    const [materialName, setMaterialName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [reOrderingLevel, setReOrderingLevel] = useState("");
    const [reOrderingQuantity, setReOrderingQuantity] = useState("");
    const [damagedQuantity, setDamagedQuantity] = useState("");

    const sendData = async (e) => {
        e.preventDefault();

        let newMaterial = {

            materialCode: materialCode,
            materialName: materialName,
            description: description,
            quantity: quantity,
            reOrderingLevel: reOrderingLevel,
            reOrderingQuantity: reOrderingQuantity,
            damagedQuantity: damagedQuantity


        }

        axios.post("http://localhost:8070/materials/add", newMaterial).then(() => {

            Swal.fire({
                title: 'Success!',
                text: 'Material added to Inventory',
                icon: 'success',
                showConfirmButton: false,
            });

        }).catch((err) => {

            Swal.fire({
                title: "Error!",
                text: "Couldn't Update your Details",
                type: "error",
            });
        })


        setTimeout(() => {
            window.location.replace("http://localhost:3000/stock/material/");
        }, 1500)

    }



    return (
        <><Navbar />
        <br/><br/><br/>
            <div className="container">
                <form onSubmit={sendData} >

                    <div className="form-group">
                        <label for="materialCode">Material Code</label>
                        <input type="text" className="form-control" id="materialCode" required placeholder="Enter Material Code"
                            onChange={(e) => {
                                setMaterialCode(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label for="name">Material Name</label>
                        <input type="text" className="form-control" id="name" required placeholder="Enter Material Name"
                            onChange={(e) => {
                                setMaterialName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input type="text" className="form-control" id="description" required placeholder="Enter Material Description"
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label for="quentity">Quantity</label>
                        <input type="text" className="form-control" id="qty" required placeholder="Enter Material Quentity"
                            onChange={(e) => {
                                setQuantity(e.target.value);
                            }} />
                    </div>

                    <div className="form-group">
                        <label for="reOrderingLevel">Re-Ordering Level</label>
                        <input type="text" className="form-control" id="reOrderingLevel" required placeholder="Enter Material Re-Ordering Level"
                            onChange={(e) => {
                                setReOrderingLevel(e.target.value);
                            }} />
                    </div>
                    <div className="form-group">
                        <label for="reOrderingQuantity">Re-Ordering Quantity</label>
                        <input type="text" className="form-control" id="reOrderingQuantity" required placeholder="Enter Material Re-Ordering Quantity"
                            onChange={(e) => {
                                setReOrderingQuantity(e.target.value);
                            }} />
                    </div>

                    <div className="form-group">
                        <label for="damagedQuantity">Damaged Quantity</label>
                        <input type="text" className="form-control" id="damagedQuantity" placeholder="Enter Damaged Quantity"
                            onChange={(e) => {
                                setDamagedQuantity(e.target.value);
                            }} />
                    </div>


                    <button type="submit" class="btn btn-primary">Submit</button>&nbsp;
                    <a href="/stock/material/"><button type="button" class="btn btn-danger">Cancel</button></a>
                </form>

            </div>
            <br/><br/><br/>
            <Footer /></>

    )
}