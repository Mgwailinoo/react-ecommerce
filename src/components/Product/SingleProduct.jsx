import React from "react";
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../Context/ProductContext";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styles from "../Product/SingleProduct.module.css";
import { Link } from "react-router-dom";

const SingleProduct = (props) => {
  const { id } = props.product;
  const [isWishlist, setIsWishlist] = useState(false);

  const { addToCart, cartItems, wishlist, addToWishlist, removeFromWishlist } =
    useContext(ProductContext);
  const cartItemAmount = cartItems[id];
  const wishlistItemAmount = wishlist[id];
  useEffect(() => {
    if (id in wishlist) {
      setIsWishlist(true, id);
    }
  }, [id, wishlist, addToWishlist]);
  const handleWishlistClick = () => {
    if (!isWishlist) {
      setIsWishlist(true);
      addToWishlist(id);
    } else {
      setIsWishlist(false);
      removeFromWishlist(id);
    }
  };
  console.log(wishlistItemAmount);
  return (
    <div className={styles.product}>
      <img src={props.product.img} alt="" />
      <div className="name">
        <span>{props.product.name}</span>
        <span>{props.product.detail}</span>
      </div>
      <span>{props.product.price}$</span>
      <div className={styles.info}>
        <div className={styles.icon}>
          <ShoppingCartOutlined
            onClick={() => addToCart(id)}
            className={styles.btn}
          />
          {cartItemAmount > 0 && <>{cartItemAmount}</>}
        </div>

        <div className={styles.icon}>
          <Link to="/detailProduct/1" style={{ color: "#000" }}>
            <SearchOutlined cartItemAmount={cartItemAmount} />
          </Link>
        </div>
        <div className={styles.icon}>
          <FavoriteBorderOutlined
            onClick={handleWishlistClick}
            style={{ color: isWishlist ? "red" : "black" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
