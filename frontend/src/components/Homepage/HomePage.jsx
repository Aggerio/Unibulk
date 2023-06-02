import Product from "../Products/Product";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import IndividualProduct from "../Products/IndividualProduct";
import { NavLink } from "react-router-dom";
import "./stylecom.css";

export default function Homepage() {
  return (
    <div className={"container"}>

      <Navbar />
      <section id={"hero"}>
        <h4>Trade-in-Offer</h4>
        <div className={"spacer_1"}></div>
        <h2>Super value deals</h2>
        <div className={"spacer_2"}></div>
        <h1>On all products</h1>
        <div className={"spacer_3"}></div>
        <p>Save more with the coupons & up tp 70% off!</p>
        <div className={"spacer_4"}></div>
        <button>Shop Now</button>
        <div className={"arrow"}>
          <a href="#trending" className={"down"}><i className={"fas fa-arrow-alt-down"}></i></a>
        </div>
      </section>
      <section className={"trending-product"} id="trending">
        <div className={"center-text"}>
          <h2>Trending <span>Products</span></h2>
        </div>
      </section>
      <div className="products">

        <NavLink to={"/product/1"} >
          <Product name="Iphone" myImage="https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy" price="100" star_rating={4} />
        </NavLink>
        <Product name="Iphone" myImage="https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy" price="100" star_rating={3} />
        <Product name="Iphone" myImage="https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy" price="100" star_rating={2} />
        <Product name="Iphone" myImage="https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy" price="100" star_rating={1} />
      </div>
      <div className="products">
        <Product name="Iphone" myImage="https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy" price="100" star_rating={4} />
        <Product name="Iphone" myImage="https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy" price="100" star_rating={3} />
        <Product name="Iphone" myImage="https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy" price="100" star_rating={2} />
        <Product name="Iphone" myImage="https://images.macrumors.com/t/4_Y5u7SrI26w6gJYGpWcU4WinXI=/800x0/smart/article-new/2022/09/iphone-14-pro.jpg?lossy" price="100" star_rating={1} />
      </div>

      <Footer />
    </div>
  );

}
