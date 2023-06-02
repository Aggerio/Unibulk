import { useEffect, useState } from 'react';
import './product.css';
import StarRating from './StarRating';
// import img from "../Homepage/images/"

export default function Product(props) {
  function handleClick() {
    console.log("Clicked on the image with URL:", props.myImage);
  }

  return (
    <div className={"row"}>
      <img src={props.myImage} alt={props.name} onClick={handleClick} />
      <div className={"product-text"}>
        <h4>{props.name}</h4>
        <h5>Sale</h5>
        <div className={"heart-icon"}>
          <i className={"far fa-heart"}></i>
        </div>
        <div className={"rating"}>
          {/* <i className={"fas fa-star"}></i> */}
          {/* <i className={"fas fa-star"}></i> */}
          {/* <i className={"fas fa-star"}></i> */}
          {/* <i className={"fas fa-star"}></i> */}
          {/* <i className={"fas fa-star-half-alt"}></i> */}
          <StarRating rating={props.star_rating} div_key={props.name} />
        </div>
        <div className={"price"}>
          <h1>{props.price}₹</h1>
        </div>
      </div>
    </div>
  );
};
