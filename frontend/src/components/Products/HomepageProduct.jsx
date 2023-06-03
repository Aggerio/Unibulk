import { useEffect, useState } from 'react';
import './product.css';
// import img from "../Homepage/images/"

export default function HomepageProduct(props) {
  function handleClick() {
    console.log("Clicked on the image with URL:", props.myImage);
  }

  return (
    <div className={"products"}>
      <div className={"rows"}>
        <img src={props.myImage} alt={props.name} onClick={handleClick} />
        <div className={"product-text"}>
          <h4>{props.name}</h4>
        </div>
      </div>
    </div>
  );
};
