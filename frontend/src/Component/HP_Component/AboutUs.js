import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./StyleSheet.css";
import "./FormStyles.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <Header />
      <section className="info-box4">
        <div className="font">
          <br />
          <h1 align="center">
            <i>About POCO CASA..</i>
          </h1>
          <br />

          <h5 align="center">
            “The little safe house for the little people in your home”
          </h5>
          <br />

          <div className="para">
            PocoCasa “Little House” is a safe space you can create in your home
            that your baby or toddler can call his/her own and grow up safely in
            for the first precious years of their childhood. PocoCasa, unlike
            other playpens is spacious and its patented design means you can
            arrange it to fit the space and shape constraints of your house. In
            the basic 6 frame form, even mother can join baby at play and even
            go to sleep with baby close without worrying if baby will fall off
            the corner of a bed.
          </div>
          <br />
          <br />
          <hr></hr>
          <br />

          <h5 align="center"> “A learning and growing house”</h5>
          <br />

          <div className="para">
            {" "}
            PocoCasa has a visually stimulating and modular design and as the
            toddler grows you can add special frames such as a play house, a toy
            box, a whiteboard, a desk, a “standup” frame. These are all designed
            to stimulate the mind, teach physical skills that will help them
            with their physical and mental growth.
          </div>
          <br />
          <br />
          <hr></hr>
          <br />

          <h5 align="center">
            {" "}
            “An invaluable tool for the busy parents of today”
          </h5>
          <br />

          <div className="para">
            Someone still should keep one eye on baby though, however the baby
            sitting job is made much easier for not only parents but grand
            parents as well, with features like the granny gate. An invaluable
            tool for any busy parent, baby sitter or aging grandparents.
          </div>
          <br />
          <br />
          <hr></hr>
          <br />

          <h5 align="center">“A flexible and mobile house”</h5>
          <br />

          <div className="para">
            Though spacious, PocoCasa is designed to be collapsible and portable
            which includes the specially designed mattress. You can fold it up
            and put it in the boot of your car and take it anywhere with you to
            create a safe space for baby during a vacation. Put it on the grass,
            put it in the sand or reposition it quickly anywhere around your
            house. PocoCasa is made of materials that are washable and dries
            fast.
          </div>
          <br />
          <br />
          <hr></hr>
          <br />

          <h5 align="center">“A flexible and mobile house”</h5>
          <br />

          <div className="para">
            The playpen’s flexible plastic and special structure also means it
            is can better absorb shock should the baby fall and is safer to baby
            than other harder material based playpen alternatives. All
            components have been safety tested for flammability, mechanical
            defects and toxicity at international standards. For added safety we
            also provide padding for the corners. In addition to help keep baby
            safe from mosquitoes and insects, you can also add specially
            designed mosquito net frame that still maintains a sense of space,
            needed to keep the baby physiologically happy being in the playpen.
          </div>
          <br />
          <br />
          <br />
          <hr></hr>
          <br />

          <h3 align="center">
            WE WISH YOUR CHILD GROWS UP SAFELY AND HAPPILY...
          </h3>
          <br />

          <h5>
            <ul>
              <li>The playpen’s flexible plastic and special structure.</li>
              <li>
                You can find PocoCasa (or flexiPlaypen) in many outlets in
                Colombo and Kandy.
              </li>
              <li>
                For more information please call 2575352 during work hours or
                visit our showroom in Colombo 3 for a demonstration.
              </li>
              <li>
                International clients can visit our website at
                <b>
                  <i> www.pococasa.com</i>
                </b>{" "}
                or email{" "}
                <b>
                  <i>info@pococasa.com</i>
                </b>
              </li>
            </ul>
          </h5>
          <br />
        </div>
      </section>
      {/* navigates to home */}
      <Link to="/">
        <center>
          <img src={require("./images/home.png")} height="70px" width="70px" />
        </center>
        <br />
      </Link>
      <Footer />
    </>
  );
}

export default AboutUs;
