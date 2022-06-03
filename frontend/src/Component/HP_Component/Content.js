import React, { Component } from "react";
import "./Header";
import "./Footer";
import "./StyleSheet.css";
import "./FormStyles.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Content() {
  return (
    <>
      <Header />
      <div className="body">
        <div className="row no-gutters" height="100vh">
          <div className="col-md-6 no-gutters">
            <div className="leftside" >
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src={require("./images/slider3.png")}
                      height="570px"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src={require("./images/slider6.jpeg")}
                      height="570px"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src={require("./images/patent.jpeg")}
                      height="570px"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 no-gutters">
            <div className="rightside no-gutters"></div>
          </div>
        </div>
        <div className="row no gutters" height="100vh"></div>
        
        <div className="row no gutters">
          <div className="font">
            <br />
            <br />
            <h1 align="center">
              <i>New Arrivals..</i>
            </h1>
          </div>
        </div>

        <section className="info-box1">
          <div className="font">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <img
                      src={require("./images/6panel.jpeg")}
                      height="300px"
                      width="300px"
                    />
                  </td>
                  <td>
                    <br />
                    <div className="h1">Standard 6 pannel playpen</div>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    venenatis purus lectus, sed aliquam enim mattis et. Sed vitae
                    risus vitae odio ornare varius. Curabitur facilisis sem in
                    gravida ultrices. Duis et interdum ligula, ut finibus sapien.
                    Morbi mattis fringilla laoreet. Nulla molestie nisl nec lectus
                    vulputate elementum. Duis aliquet magna quis feugiat
                    vestibulum. Nunc vestibulum turpis erat, vel suscipit turpis
                    ultrices in. Proin sagittis est in neque placerat commodo.
                    <br />
                    <Link to="/Products">
                      <button type="button" class="btn2" value="See More Info..">
                        <span>See More Info..</span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <img
                      src={require("./images/6panelwithgranny.jpeg")}
                      height="300px"
                      width="300px"
                    />
                  </td>
                  <td>
                    <br />
                    <div className="h1">6 pannel playpen</div>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    venenatis purus lectus, sed aliquam enim mattis et. Sed vitae
                    risus vitae odio ornare varius. Curabitur facilisis sem in
                    gravida ultrices. Duis et interdum ligula, ut finibus sapien.
                    Morbi mattis fringilla laoreet. Nulla molestie nisl nec lectus
                    vulputate elementum. Duis aliquet magna quis feugiat
                    vestibulum. Nunc vestibulum turpis erat, vel suscipit turpis
                    ultrices in. Proin sagittis est in neque placerat commodo.
                    <br />
                    <br />
                    <Link to="/Products">
                      <button type="button" class="btn2" value="See More Info..">
                        <span>See More Info..</span>
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <img
                      src={require("./images/playhouse.jpeg")}
                      height="300px"
                      width="300px"
                    />
                  </td>
                  <td>
                    <br />
                    <div className="h1">Play house</div>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    venenatis purus lectus, sed aliquam enim mattis et. Sed vitae
                    risus vitae odio ornare varius. Curabitur facilisis sem in
                    gravida ultrices. Duis et interdum ligula, ut finibus sapien.
                    Morbi mattis fringilla laoreet. Nulla molestie nisl nec lectus
                    vulputate elementum. Duis aliquet magna quis feugiat
                    vestibulum. Nunc vestibulum turpis erat, vel suscipit turpis
                    ultrices in. Proin sagittis est in neque placerat commodo.
                    <br />
                    <br />
                    <Link to="/Products">
                      <button type="button" class="btn2" value="See More Info..">
                        <span>See More Info..</span>
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}

export default Content;
