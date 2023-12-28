import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import "./Card.css";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };
  
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag" onClick={handleHeartClick}>
              <AiFillHeart style={{ color: isHeartClicked ? 'red' : 'grey' }} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
