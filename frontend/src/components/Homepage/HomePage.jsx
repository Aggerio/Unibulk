import { useState, useEffect } from 'react';
import Product from "../Products/Product";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import IndividualProduct from "../Products/IndividualProduct";
import NewsUpdate from '../News_Update/NewsUpdate';
import { NavLink } from "react-router-dom";
import HomepageProduct from '../Products/HomepageProduct';
import axios from 'axios';
import "./stylecom.css";

export default function Homepage() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/allProducts')
      .then(response => { setData(response.data.products); })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={"container"}>

      <Navbar />
      <section id={"hero"}>
        <h4>Exceptional Offers</h4>
        <div className={"spacer_1"}></div>
        <h2>Super value deals</h2>
        <div className={"spacer_2"}></div>
        <h1>On all products</h1>
        <div className={"spacer_3"}></div>
        <p>Save more with the coupons & up tp 70% off!</p>
        <div className={"spacer_4"}></div>
        <a href='/shop' >
          <button>Shop Now</button>
        </a>
        <div className={"arrow"}>
          <a href="#trending" className={"down"}><i className={"fas fa-arrow-alt-down"}></i></a>
        </div>
      </section>
      <section className={"trending-product"} id="trending">
        <div className={"center-text"}>
          <h2>Trending <span>Products</span></h2>
        </div>
        {data.map(item => (
          <div >
            <NavLink to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
              <HomepageProduct name={item.name} myImage={item.myImage} price={item.price} star_rating={item.star_rating} />
            </NavLink>
          </div>
        ))}
      </section >
      <NewsUpdate />
      <Footer />
    </div >
  );

}
