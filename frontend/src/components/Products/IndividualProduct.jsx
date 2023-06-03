import { React, useState } from "react";
import "./IndividualProduct.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Milestone from "../Milestone/Milestone";
import { NavLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

// import { useStateValue } from "./StateProvider";

function IndividualProduct() {

  const [product_img, setImg] = useState("https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy")
  const [number, setNumber] = useState(1);

  function showImg(event) {
    const link = event.target.src;
    setImg(link);
  }
  const showToastMessage = () => {
    console.log("Success");
    toast.success(`${number} items Added to Cart!`, {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const handleChange = e => {
    const newValue = e.target.value;
    if ((newValue) > 0) { // Only allow numeric values
      setNumber(newValue);
    }
  }
  return (
    <div>

      <div className="container">
        <Navbar />
        <div className="flex-box">
          <div className="left">
            <div className="big-img">
              <img src={product_img} />
            </div>
            <div className="images">
              <div className="small-img">
                <img src={"https://assets.gqindia.com/photos/6343bda4bac0ed8f5bc20d96/16:9/pass/iPhone-14-Pro-Max-Review_02.jpg"} onClick={showImg} />
              </div>
              <div className="small-img">
                <img src={"https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/10/09/1360500-iphone-14-pro.jpg"} onClick={showImg} />
              </div>
              <div className="small-img">
                <img src={"https://piunikaweb.com/wp-content/uploads/2022/10/Untitled-design-2022-10-04T185641.251.jpg"} onClick={showImg} />
              </div>
              <div className="small-img">
                <img src={"https://i.pinimg.com/736x/5d/92/24/5d922422db637672adc17e8b5cacb27f.jpg"} onClick={showImg} />
              </div>
            </div>
          </div>


          <div className="right">
            <div className="pname">iPhone 14 Pro Max</div>
            <div className="ratings">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <div className="price">$40</div>
            <div className="quantity">
              <p>Quantity :</p>
              <input type="number" min="1" max="5" value={number} onChange={handleChange} />
            </div>
            <div className="btn-box">
              <div>
                <button className="cart-btn" onClick={showToastMessage}>Add to Cart</button>
                <ToastContainer />
              </div>

              <NavLink to={'/buynow'} style={{ textDecoration: 'none' }}>
                <button className="buy-btn">Buy Now</button>
              </NavLink>
            </div>
          </div>
        </div>
        <Milestone />
        <Footer />
      </div>

    </div>
  );
}

export default IndividualProduct;
