import { useEffect, useState } from 'react';
import './product.css';
import StarRating from './StarRating';
// import img from "../Homepage/images/"

export default function Product(props) {
  function handleClick() {
    console.log("Clicked on the image with URL:", props.myImage);
  }

  return (
    <div className={"products"}>
      <div className={"rows"}>
        <img src={props.myImage} alt={props.name} onClick={handleClick} />
        <div className={"product-text"}>
          <h4>{props.name}</h4>
          <div className={"heart-icon"}>
            <i className={"far fa-heart"}></i>
          </div>
          <div className={"rating"}>
            <StarRating rating={props.star_rating} div_key={props.name} />
          </div>
          <div className={"price"}>
            <h4>₹</h4>
            <h1>500</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
