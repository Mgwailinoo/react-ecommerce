import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../Product/ProductList.module.css";
import { ProductsList } from "../../data/products";
import SingleProduct from "./SingleProduct";

const ProductList = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsList);

  const filter = (type) => {
    setMenuProducts(ProductsList.filter((product) => product.type === type));
  };
  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  const listItemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };
  return (
    <div className={styles.ProductListContainer}>
      <div className={styles.ProductList}>
        <ul className={styles.menus}>
          <li onClick={() => setMenuProducts(ProductsList)}>All</li>
          <li onClick={() => filter("make up")}>MakeUp</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("hairs")}>Hairs</li>
          <li onClick={() => filter("fragrance")}>Fragrance</li>
        </ul>
        <motion.div
          className={styles.lists}
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {MenuProducts.map((product, i) => (
            <motion.div key={i} variants={listItemVariants}>
              <SingleProduct product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductList;
