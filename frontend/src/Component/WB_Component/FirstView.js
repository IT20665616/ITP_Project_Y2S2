import React from "react";
import './css/StyleSheet.css'
import { Link } from 'react-router-dom';
import image from "./images/bt1.jpeg"
import img from "./images/bk1.jpeg"


export default function FirstView() {
    return (
       
        <>
        <form
        class="bg_image"
        style={{
          backgroundImage: 'url('+img+')',
          backgroundSize: "cover",
          height: "100vh",
         
        }}
      >
            <section className="wrapper-box" style={{ backgroundImage:`url(${image})` ,height:"100px" }}>
                <div className="container"   >
                    <center>
                    <Link to="/registerWC">
                        <button className="button">
                            <span> Register</span>
                        </button>
                    </Link>
                    </center>
                    <br />
                    <br />
                    </div>
                    </section>

                    <section className="wrapper-box" style={{ backgroundImage:`url(${image})` ,height:"100px"}}>
                <div className="container">
                    <Link to="/loginWC">
                        <button className="button">
                            <span>Log in</span>
                        </button>
                    </Link>
                </div>
            </section>
            </form>
        </>
        
    )
}