import React, { useContext } from "react";
import { ProductsList as PRODUCTS } from "../../data/products";
import { CartItem } from "./CartItem";
import { ProductContext } from "../../Context/ProductContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DetailProduct from "../DetailProducts/DetailProduct";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ProductContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>{totalAmount > 0 ? <h1>Your Items</h1> : ""}</div>
      <div className="cart-container">
        {totalAmount > 0 ? (
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="Quatity">Quatity</h3>
            <h3 className="total">Total Amount</h3>
          </div>
        ) : (
          ""
        )}
        <div className="cartItems">
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <>
                  <CartItem data={product} />
                </>
              );
            }
          })}
        </div>
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: {totalAmount} $</p>
          <button onClick={() => navigate("/productLists")}>
            Continues Shopping
          </button>
          <Link to="/checkout">
            <button>CheckOut</button>
          </Link>
        </div>
      ) : (
        <>
          <svg
            width="123px"
            height="123px"
            viewBox="-1.6 -1.6 23.20 23.20"
            xmlns="http://www.w3.org/2000/svg"
            fill="#313b2b"
            stroke="#313b2b"
            transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="#CCCCCC"
              stroke-width="2.28"
            >
              <path
                d="M9.707 1.293a1 1 0 00-1.414 1.414L9.586 4 8.293 5.293a1 1 0 001.414 1.414L11 5.414l1.293 1.293a1 1 0 101.414-1.414L12.414 4l1.293-1.293a1 1 0 00-1.414-1.414L11 2.586 9.707 1.293z"
                fill="#5C5F62"
              ></path>
              <path
                fill-rule="evenodd"
                d="M1 1a1 1 0 011-1h1.5A1.5 1.5 0 015 1.5V10h11.133l.877-6.141a1 1 0 111.98.282l-.939 6.571A1.5 1.5 0 0116.566 12H5v2h10a3 3 0 11-2.83 2H6.83A3 3 0 113 14.17V2H2a1 1 0 01-1-1zm13 16a1 1 0 112 0 1 1 0 01-2 0zM3 17a1 1 0 112 0 1 1 0 01-2 0z"
                fill="#5C5F62"
              ></path>
            </g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M9.707 1.293a1 1 0 00-1.414 1.414L9.586 4 8.293 5.293a1 1 0 001.414 1.414L11 5.414l1.293 1.293a1 1 0 101.414-1.414L12.414 4l1.293-1.293a1 1 0 00-1.414-1.414L11 2.586 9.707 1.293z"
                fill="#5C5F62"
              ></path>
              <path
                fill-rule="evenodd"
                d="M1 1a1 1 0 011-1h1.5A1.5 1.5 0 015 1.5V10h11.133l.877-6.141a1 1 0 111.98.282l-.939 6.571A1.5 1.5 0 0116.566 12H5v2h10a3 3 0 11-2.83 2H6.83A3 3 0 113 14.17V2H2a1 1 0 01-1-1zm13 16a1 1 0 112 0 1 1 0 01-2 0zM3 17a1 1 0 112 0 1 1 0 01-2 0z"
                fill="#5C5F62"
              ></path>
            </g>
          </svg>
          <h3>No Items Now!</h3>
          <Link to="/productLists">
            <button>Shop Now!</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
