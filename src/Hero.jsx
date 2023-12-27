import React from "react";
import image from "./Images/restauranfood.jpg";

function Hero() {
  return (
    <>
      <article>
        <div className="container-Hero">
          <div className="grill-un">
            <h1 className="h1-Hero">Little Lemon</h1>
            <h2 className="h2-Hero">Chicago</h2>
            <p className="p-Hero">
              {" "}
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist
            </p>
            <button className="B-Hero">Reserve a Table</button>
          </div>
          <div className="grill-deux">
            <img src={image} alt="restaurant" id="Image-Hero"></img>
          </div>
        </div>
      </article>
    </>
  );
}

export default Hero;
