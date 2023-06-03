import { React, useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Product from '../Products/Product';
import Footer from '../Footer/Footer';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function Shop() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/allProducts')
      .then(response => { setData(response.data.products); console.log(response.data.products); })
      .catch(error => console.log(error));
  }, []);

  return (<div className="tr_div" style={{ "background-color": "#f5f5f5" }}><Navbar />
    <h1> List of all products</h1>
    {data.map(item => (
      <div className="products">
        <NavLink to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
          <Product name={item.name} myImage={item.myImage} price={item.price} star_rating={item.star_rating} />
        </NavLink>
      </div>
    ))}
    <Footer />
  </div>);
}
