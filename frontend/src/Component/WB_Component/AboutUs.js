import React from 'react';
import img2 from "./images/wh1.jpeg"
function AboutUs() {
return(
    <div>
        <section id="about" style= {{backgroundColor:'linen'}}>
        <div className="container my-4 py-4">
        <div className="row">

                <div className="col-md-5">
                <h3 className="fs-5 mb-0">About Us</h3>
                <h1 className="display-6 mb-2">Who <b> We</b> Are</h1><hr/>
                <hr className="w-50"/><div>
                
              
               </div>
              
               <div className="img"
            style={{
                backgroundImage: 'url('+img2+')',
                backgroundSize: "cover",
                height: "70vh",
                width:"150vh"
               
              }}
            >
                <p className="lead mb-4">
                <b>
                We value flexibility, try to offer reasonable and affordable prices, 
                and are aware well of the trends and changes on the market. Unlike other companies, 
                we offer the unique possibility to select goods piece by piece, regarding models and sizes. 
                In our showroom there are more than 40.000 articles on display. At the same time, our products 
                can be hand-picked from our warehouse, from more than 1.000.000 articles in original boxes or 
                sacks. We also offer smaller mixes of clothes to our clients. Sample mixes of minimum quantity,
                 as well as sales on pallets are also possible, depending on our clients demands. 
                 We ship worldwide with DPD.
                
                 A wholesale customer is any customer who has at least one price list assigned to them. You can create wholesale orders for these 
                 customers using your Shopify admin. You can also give these customers access to your wholesale store by inviting them to create wholesale store accounts 
                 (which are different from online store accounts). Customers with wholesale store accounts can log 
                 into your wholesale store and create their own orders.
                 You can find information about a wholesale customer by opening their customer page on the Customers page in the wholesale channel.
                 You can perform the following tasks for a customer from their wholesale customer page:
                 Set a minimum order amount Look up their wholesale prices Invite them to your wholesale store 
                 Let your customers pay for their orders at checkout in your wholesale store.In our showroom there are more than 40.000 articles on display. At the same time, our products 
                can be hand-picked from our warehouse, from more than 1.000.000 articles in original boxes or 
                sacks. We also offer smaller mixes of clothes to our clients. Sample mixes of minimum quantity,
                 as well as sales on pallets are also possible, depending on our clients demands. 
                 We ship worldwide.

                </b>

                             </p>
                          
           
                
        
          </div>
                             <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                             <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                             

                </div> 
                
                
                
                </div>
                
                
            </div>
           
     </section>
     
 </div>
)
}
export default AboutUs;