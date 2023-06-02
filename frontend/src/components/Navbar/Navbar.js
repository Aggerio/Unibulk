import './stylecom.css';
import { Link, NavLink } from 'react-router-dom';
import logo from "../Homepage/images/logo.png"

export default function Navbar() {
  return (
    <div className={"container"} >
      <section id={"header"}>
        <NavLink to={'/home'}><img src={logo} className={"logo"} /></NavLink>
        <div>
          <ul id="navbar">
            <li><Link className={"active"} to="/home">Home</Link></li>
            <li><NavLink to={"/shop"}>Shop</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/cart"><i className="fad fa-shopping-bag"></i></NavLink></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
