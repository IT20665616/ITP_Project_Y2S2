import React, { useState, useEffect} from "react";
import Header from '../HP_Component/Header'
import Footer from '../HP_Component/Footer'
import {Link} from 'react-router-dom';

export default function CustomerCare(){
    return(
        <>
        <Header/> 
        <div className="container">

            <br/>
            <br/>
            <br/>
            <div>
            <Link to="/addc" className="nav-link"><button type="button" class="btn btn-primary btn-lg btn-block">Add Complaint</button></Link>
            </div>
            <div>
            <Link to="/addi" className="nav-link"><button type="button" class="btn btn-secondary btn-lg btn-block">Add Inquiry</button></Link>
            </div>
            <div>
            <Link to="/allc" className="nav-link"><button type="button" class="btn btn-primary btn-lg btn-block">View Complaint</button></Link>
            </div>
            <div>
            <Link to="/alli" className="nav-link"><button type="button" class="btn btn-secondary btn-lg btn-block">View Inquiry</button></Link>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
        <Footer/>
        </>
    )

}