import React from "react";
import '../HP_Component/StyleSheet.css';
import { Link } from 'react-router-dom';


export default function Initial() {
    return (
       
        <>
        {/* <form
        class="bg_image"
        style={{
          backgroundImage: 'url('+img+')',
          backgroundSize: "cover",
          height: "100vh",
         
        }}
      > */}
            <section className="wrapper-box" >
                <div className="container"   >
                    <center>
                    <Link to="/registerRC">
                        <button className="button">
                            <span> Register</span>
                        </button>
                    </Link>
                    </center>
                    <br />
                    <br />
                    </div>
                    </section>

                    <section className="wrapper-box" >
                <div className="container">
                    <Link to="/loginRC">
                        <button className="button">
                            <span>Log in</span>
                        </button>
                    </Link>
                </div>
            </section>
            {/* </form> */}
        </>
        
    )
}