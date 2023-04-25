import React, { useState, useEffect } from "react";
import { ProductsData } from "../../data/products";
import Product from "./Product";
import styles from "./Products.module.css";
import axios from "axios";
// import ReactCompareImage from "react-compare-image";
// import Before from "../../assets/before.png";
// import After from "../../assets/after.png";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState(ProductsData);

  return (
    <div className={styles.productContainer}>
      <div className={styles.productContent}>
        <div className={styles.productDesc}>
          <p className={styles.productTitle}>MakeUp</p>
          <Link to="/productLists" className={styles.productViewBtn}>
            View All
          </Link>
        </div>

        <div className={styles.products}>
          {products.map((product, i) => (
            <Link to="./detailProduct/1">
              <Product {...product} />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.productContent}>
        <div className={styles.productDesc}>
          <p className={styles.productTitle}>SkinCare</p>
          <Link to="/productLists" className={styles.productViewBtn}>
            View All
          </Link>
        </div>
        <div className={styles.products}>
          {products.map((product, i) => (
            <Link to="./detailProduct/1">
              <Product {...product} />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.productContent}>
        <div className={styles.productDesc}>
          <p className={styles.productTitle}>Hairs</p>
          <Link to="/productLists" className={styles.productViewBtn}>
            View All
          </Link>
        </div>
        <div className={styles.products}>
          {products.map((product, i) => (
            <Link to="./detailProduct/1">
              <Product {...product} />
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.productContent}>
        <div className={styles.productDesc}>
          <p className={styles.productTitle}>Fragrance</p>
          <Link to="/productLists" className={styles.productViewBtn}>
            View All
          </Link>
        </div>
        <div className={styles.products}>
          {products.map((product, i) => (
            <Link to="./detailProduct/1">
              <Product {...product} />
            </Link>
          ))}
        </div>
      </div>
      {/* <div className={styles.Virtual}>
        <span>Transfrom your skin like magical!</span>

        <div className={styles.wrapper}>
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div> */}
    </div>
  );
};

export default Products;
