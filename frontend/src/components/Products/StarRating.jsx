import { useEffect, useState } from 'react';
import './product.css';

export default function StarRating(props) {
  return (
    <div key={props.name} className="star-rating">
      {[...Array(props.rating)].map((index, _star) => {
        return (
          <i key={index} className="fas fa-star"></i>
        );
      })}
    </div>
  );
}
