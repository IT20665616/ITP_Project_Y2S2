import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './css/StyleSheet.css';
import './css/Footer.css';
import AboutUs from './AboutUs';
import Header from './Header';
import Footer from '../HP_Component/Footer';


function HomeWC() {
    return (
        <div >
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
                      src={require("./images/slider2.jpeg")}
                      height="570px"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src={require("./images/slider1.jpeg")}
                      height="570px"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src={require("./images/slider3.png")}
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
            <AboutUs />
            <Footer />

        </div>
</div>

    );
}

export default HomeWC;