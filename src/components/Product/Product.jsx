import React from "react";
import styles from "./Product.module.css";
const Product = ({ name, details, price, img, type }) => {
  return (
    <div className={styles.ProductCard}>
      <img src={img} alt="" className={styles.img} />
      <p>{name}</p>
      <span>{details}</span>
    </div>
  );
};

export default Product;
