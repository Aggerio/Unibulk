// import { React, useState } from "react";
// import "./IndividualProduct.css";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import Milestone from "../Milestone/Milestone";
// import { NavLink } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from "react-toastify";

// import { useStateValue } from "./StateProvider";

// function IndividualProduct() {

//   const [product_img, setImg] = useState("https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy")
//   const [number, setNumber] = useState(1);

//   function showImg(event) {
//     const link = event.target.src;
//     setImg(link);
//   }
//   const showToastMessage = () => {
//     console.log("Success");
//     toast.success(`${number} items Added to Cart!`, {
//       position: toast.POSITION.TOP_RIGHT
//     });
//   }

//   const handleChange = e => {
//     const newValue = e.target.value;
//     if ((newValue) > 0) { // Only allow numeric values
//       setNumber(newValue);
//     }
//   }
//   return (
//     <div>

//       <div className="container">
//         <Navbar />
//         <div className="flex-box">
//           <div className="left">
//             <div className="big-img">
//               <img src={product_img} />
//             </div>
//             <div className="images">
//               <div className="small-img">
//                 <img src={"https://assets.gqindia.com/photos/6343bda4bac0ed8f5bc20d96/16:9/pass/iPhone-14-Pro-Max-Review_02.jpg"} onClick={showImg} />
//               </div>
//               <div className="small-img">
//                 <img src={"https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/10/09/1360500-iphone-14-pro.jpg"} onClick={showImg} />
//               </div>
//               <div className="small-img">
//                 <img src={"https://piunikaweb.com/wp-content/uploads/2022/10/Untitled-design-2022-10-04T185641.251.jpg"} onClick={showImg} />
//               </div>
//               <div className="small-img">
//                 <img src={"https://i.pinimg.com/736x/5d/92/24/5d922422db637672adc17e8b5cacb27f.jpg"} onClick={showImg} />
//               </div>
//             </div>
//           </div>


//           <div className="right">
//             <div className="pname">iPhone 14 Pro Max</div>
//             <div className="ratings">
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star-half-alt"></i>
//             </div>
//             <div className="price">$40</div>
//             <div className="quantity">
//               <p>Quantity :</p>
//               <input type="number" min="1" max="5" value={number} onChange={handleChange} />
//             </div>
//             <div className="btn-box">
//               <div>
//                 <button className="cart-btn" onClick={showToastMessage}>Add to Cart</button>
//                 <ToastContainer />
//               </div>

//               <NavLink to={'/buynow'} style={{ textDecoration: 'none' }}>
//                 <button className="buy-btn">Buy Now</button>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//         <Milestone />
//         <Footer />
//       </div>

//     </div>
//   );
// }

// export default IndividualProduct;

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./IndividualProduct.css";
import DetailsThumb from "./DetailsThumb";
import Milestone from "../Milestone/Milestone";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

// class IndividualProduct extends React.Component {
function IndividualProduct() {

  const [added, setAdded] = useState(false);
  const [state, setState] = useState({
    products: [
      {
        _id: "1",
        title: "iPhone 12 Mini (128 GB)-Black",
        src: [
          "https://www.primejigar.com/wp-content/uploads/2021/02/71uuDYxn3XL._SL1500_.jpg",
          "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1630929032/ysjyzdrcef26f88bg5gt.png",
          "https://m.media-amazon.com/images/I/81mrpbPBRwS._SX466_.jpg",
          "https://m.media-amazon.com/images/I/81tJbh5cAXL._SX466_.jpg",
        ],
        description: "",
        content:
          "iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system.",
        price: 336,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  });

  const [prod, setPr] = useState(state["products"]);
  const [ind, setInd] = useState(state["index"]);
  useEffect(() => {
    const { index } = state;
    myRef.current.children[index].className = "active";
    const last = window.location.pathname.split("/").pop();
    console.log(`http://127.0.0.1:5000/product/${last}`)

    axios.get(`http://127.0.0.1:5000/product/${last}`).then(response => {
      const prod = response.data;
      let new_state = state;
      new_state.products = [prod['p'][0]];
      console.log(prod['p'][0]);
      setState(new_state);
      setPr(new_state["products"]);
      setInd(new_state["index"]);
      console.log(state);
    }).catch(error => { console.log(error) });
  }, []);

  let myRef = React.createRef();

  const handleTab = (index) => {
    // setState({ index: index });
    setInd(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };
  const showToastMessage = () => {
    // console.log("Success");
    if (added == false) {

      toast.success(`Added to Cart!`, {
        position: toast.POSITION.TOP_RIGHT
      });
      setAdded(true);
    }
    else {
      toast.success('Already added to Cart!', {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }


  return (
    <div className={"trial_div"}>
      <Navbar />
      <div className="app">
        {prod.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[ind]} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
              </div>
              <div className="para">
                <p>${item.price}</p>
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>

              <DetailsThumb
                images={item.src}
                tab={handleTab}
                myRef={myRef}
              />
              <button className="cart" onClick={showToastMessage}>Add to cart</button>
              <ToastContainer />
            </div>
          </div>
        ))}
        <Milestone />
      </div>
      <Footer />
    </div>
  );
}

export default IndividualProduct;


