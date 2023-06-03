import React from 'react';
import logo from "../Homepage/images/logo.png";
import './styles.css';

export default function Footer() {
  return (
    <div>

      <div className={"lower_info"}>
        <section className="contact">
          <div className="contact-info">
            <div className="first-info">
              <div className="foo-logo"><img src={logo} alt="" /></div>
              <p>72603 VIT VELLORE,   TAMIL NADU </p>
              <p>8457960757</p>
              <p>adityapanigrahy98@gmail.com</p>
              <div className="social-icon">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>

              </div>
            </div>
            <div className="second-info">
              <h4>Support</h4>
              <p>Contact Us</p>
              <p>About Page</p>
              <p>Size Guide</p>
              <p>Shopping & Returns</p>
              <p>Privacy</p>
            </div>
            <div className="fourth-info">
              <h4>Company</h4>
              <p>About</p>
              <p>Blog</p>
              <p>Affiliate</p>
              <p>Login</p>
            </div>
            <div className="five">
              <h4>Subscribe</h4>
              <p>Recieve updates, Hot deals, Discounts Sent Straight to you inbox</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Recieve updates, Hot deals, Discounts Sent Straight to you inbox</p>

            </div>
          </div>
        </section>
      </div>
    </div >);
}
