import React from "react";
import "./Products.css";
const Products = () => {
  return (
    <div>
      <div className="textContainer">
        <h2>
          Start your Journey to Prosperity by choosing from our range of
          products.
        </h2>
      </div>
      <div className="imgContainer">
        <img className="productLogo1" src="/finLogo.png" />
        <img className="productLogo2" src="/treatsLogo.png" />
      </div>
    </div>
  );
};

export default Products;
