import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <div className="display-4 fw-bolder mb-4 text-center text-white">
                                The little safe house for the little people in your home
                            </div>
                            <div className="lead text-center fs-5 mb-5 text-white">

                                PocoCasa “Little House” is a safe space you can create in your home that your
                                baby or toddler can call his/her own and grow up safely in for the first precious
                                years of their childhood. PocoCasa, unlike other playpens is spacious and its
                                patented design means you can arrange it to fit the space and shape constraints
                                of your house. In the basic 6 frame form, even mother can join baby at play and
                                even go to sleep with baby close without worrying if baby will fall off the corner of a bed.

                            </div>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/contact" className="btn btn-light me-4
                            rounded-pill px-4 py-2">Get Quote</NavLink>
                                <NavLink to="/about" className="btn btn-outline-light 
                            rounded-pill px-4 py-2">Our Services</NavLink>


                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Contact />
        </div>


    );
}

export default Home;