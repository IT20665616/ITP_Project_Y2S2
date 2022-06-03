import React from 'react';
import img from '../../images/aboutus.webp';
import Navbar from './Navbar';
const About = () => {
    return (
        <>
            <section id="about">
                <div className="container my-4 py-4">
                    <div className="row">
                        <div className="col-md-6"><br /><br /><br /><br/>
                            <img src={img} alt="About" className="w-100" />
                        </div>

                        <div className="col-md-5">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b> We</b> Are</h1><hr />
                            <hr className="w-50" />
                            <p className="lead mb-4">
                                The playpen’s flexible plastic and special structure also means it is
                                can better absorb shock should the baby fall and is safer to baby than
                                other harder material based playpen alternatives. All components have
                                been safety tested for flammability, mechanical defects and toxicity
                                at international standards. For added safety we also provide padding
                                for the corners. In addition to help keep baby safe from mosquitoes
                                and insects, you can also add specially designed mosquito net frame
                                that still maintains a sense of space, needed to keep the baby
                                physiologically happy being in the playpen.</p>

                            <p className="lead fs-4 mb-2"> A tried and tested product with 100% customer satisfaction rate</p>

                            <p className="lead fs-4 mb-4">“We wish your child grows up happily and safely”</p>

                            <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>


                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default About;