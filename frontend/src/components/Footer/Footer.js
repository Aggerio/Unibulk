import React from 'react';
import logo from "../Homepage/images/logo.png";
import './styles.css';

export default function Footer() {
  return (
    <div>
      <section class="updates-news">
        <div className="up-center-text">
          <h2>New Updates</h2>
        </div>
        <div className="update-cart">
          <div className="cart">
            <img src={"https://media.istockphoto.com/id/1080323518/photo/fitness-tracker-smart-watch-black-on-black-background-3d-illustration.jpg?s=170667a&w=0&k=20&c=GJF8RRO9Rl3PLhJWYOIJEBy4MErIAVaflilKCMIzRZs="} alt="" />
            <h5>20 May 2023</h5>
            <h4>Let's start bring sale on this summer vacation</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo tempora dolorem perspiciatis tempore culpa aspernatur cum, optio fugiat asperiores tenetur ab itaque saepe obcaecati deleniti dolor voluptatibus, assumenda incidunt totam.</p>
            <h6>Continue Reading..</h6>
          </div>

          <div className="cart">
            <img src={"https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"} alt="" />
            <h5>24 May 2023</h5>
            <h4>Let's start bring sale on this summer vacation</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo tempora dolorem perspiciatis tempore culpa aspernatur cum, optio fugiat asperiores tenetur ab itaque saepe obcaecati deleniti dolor voluptatibus, assumenda incidunt totam.</p>
            <h6>Continue Reading..</h6>
          </div>

          <div className="cart">
            <img src={"https://t3.ftcdn.net/jpg/02/80/69/44/360_F_280694408_bHU8GgeMYDnqEtiwEmi9BOqeEcFL213T.jpg"} alt="" />
            <h5>30 May 2023</h5>
            <h4>Let's start bring sale on this summer vacation</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo tempora dolorem perspiciatis tempore culpa aspernatur cum, optio fugiat asperiores tenetur ab itaque saepe obcaecati deleniti dolor voluptatibus, assumenda incidunt totam.</p>
            <h6>Continue Reading..</h6>
          </div>

        </div>
      </section>
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
