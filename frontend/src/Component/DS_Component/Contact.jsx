import React, {useState} from "react";
import img from '../../images/contact.png';
import Footer from "./Footer";



const Contact = () => {

 

    const [msg, setMsg] = useState({
        Cname : "",
        Cemail : "",
        Cmessage : ""
      });


  // Handle Inputs
  const handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg, [name]:value});
  }

  // Handle Submit
  const handleSubmit = async (event)=>{
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const {Cname, Cemail, Cmessage} = msg;
    try {
      //It is Submitted on port 3000 by default
      // Which is Front End but we need to 
      // Submit it on Backend which is on 
      // Port 3001. So we need Proxy.
      const res = await fetch('/message', {
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          Cname, Cemail, Cmessage
        })
      })
      console.log(res.status)
      if(res.status === 400 || !res){
        window.alert("Message Not Sent. Try Again Later")
      }else{
        // You need to Restart the Server for Proxy Works
        // Now Try Again
        window.alert("Message Sent");
        setMsg({
          Cname : "",
          Cemail : "",
          Cmessage : ""
        })
        
      }
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">
                                Have Some <b>Question</b>
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                          <br/><br/>
                            <img src={img} alt="Contact" className="w-75" height="300px" width="500px"/>
                        </div>
                        <div className="col-md-6">
                        <form onSubmit={handleSubmit} method="POST">
                                <div class="mb-3">
                                    <label for="name" class="form-label">
                                    Your Name</label>
                                    <input type="text" 
                                    class="form-control" 
                                    id="name" 
                                    placeholder="John Smith" 
                                    name="Cname"
                                    value={msg.Cname}
                                    onChange={handleChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">
                                   Email Address </label>
                                    <input type="email" 
                                    class="form-control" 
                                    id="email" 
                                    placeholder="JohnSmith@gmail.com" 
                                    name="email"
                                    value={msg.Cemail}
                                    onChange={handleChange}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">
                                   Your Massage
                                   </label>
                                    <textarea
                                    class="form-control" 
                                    id="exampleFormControlInput1" 
                                    name="message"
                                    value={msg.Cmessage}
                                    onChange={handleChange}
                                   rows="5"></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Send Message<i className="fa fa-paper-plane ms-2 "></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    );
};
export default Contact;