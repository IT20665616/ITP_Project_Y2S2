import React from "react";
import { Link } from "react-router-dom";
import '../HP_Component/StyleSheet.css';
import '../HP_Component/FormStyles.css';
import Footer from "../DS_Component/Footer";
import Navbar from "../DS_Component/Navbar";

function AdminProductPage() {
    return (
        <>
            <Navbar />

            <section className='wrapper-box'>
                <div className='font'>
                    <Link to="/productcreate">
                        <button className="button"><span> Add new Products</span>
                        </button>
                    </Link>
                    <br />
                    <br />
                    <Link to="/productupdate">
                        <button className="button"><span>
                            Update Products
                        </span>
                        </button>
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    )
}


export default AdminProductPage;