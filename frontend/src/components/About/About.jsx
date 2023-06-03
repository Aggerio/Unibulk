import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import logo from '../Homepage/images/logo.png';
import './style.css';

export default function About() {
  return (<div>
    <Navbar> </Navbar>
    <div classNameName={"about_div"}>
      <div className="section">
        <div className="container">
          <div className="container-section">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h1>
                With extra ordinary demand comes extra ordinary opportunity
              </h1>
              <p>We plan to proceed with a kickstarter like milestone system which showcases the upcoming discounts, the no. of people registered and the end date of the discount.
                It works on the principal of the seller giving huge discounts on bulk orders or also known as volume discount.

              </p>
              <div className="button">
                <a href="">Read More</a>
              </div>
            </div>
            <div className="social">
              <a href="" className="fac"><i className="fab fa-facebook"></i></a>
              <a href="" className="twit"><i className="fab fa-twitter"></i></a>
              <a href="" className="insta"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="image-section">
            <img src={logo} />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>);
}
