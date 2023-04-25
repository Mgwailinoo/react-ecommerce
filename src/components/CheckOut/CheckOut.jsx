import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { ProductsList as PRODUCTS } from "../../data/products";
import styled from "./CheckOut.module.css";
import CheckoutForm from "./CheckOutForm";
import { Link } from "react-router-dom";

export const CheckOut = () => {
  const { cartItems, getTotalCartAmount, productsData } =
    useContext(ProductContext);

  const totalAmount = getTotalCartAmount();

  return (
    <>
      {totalAmount > 0 ? (
        <div id={styled.wrapper}>
          <div className={styled.CheckItemBox}>
            <div className={styled.order}>
              <h2>Checkout Summary</h2>
              {Object.keys(cartItems).map((itemId) => {
                const id = parseInt(itemId);

                const quantity = cartItems[id];

                if (quantity <= 0) {
                  return null;
                }

                const product = PRODUCTS.find((p) => p.id === id);

                if (!product) {
                  return null;
                }

                const { name, detail, img, price } = product;

                console.log(cartItems[id]);
                console.log(price);
                console.log(productsData);
                const products = PRODUCTS.find((p) => p.id === id);
                console.log(products.price);
                return (
                  <div key={id} className={styled.item}>
                    {img && <img src={img} alt={name} />}
                    <div className={styled.info}>
                      <h4>{detail}</h4>
                      <p className={styled.quantity}>Quantity: {quantity}</p>
                      <div className={styled.price}>${product.price}</div>
                      <div className={styled.totalPrice}>
                        Total Price:
                        <span>${(cartItems[id] * price).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <h4 className={styled.ship}>Shipping Fee: $5</h4>
              <hr />
              <h3 className={styled.total}>
                TOTAL <span>(included shipping )</span> : ${totalAmount + 5}
              </h3>
            </div>
          </div>

          <div className={styled.CheckOutFormBox}>
            <CheckoutForm />
          </div>
        </div>
      ) : (
        <div className={styled.EmptyCheckOut}>
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
        </div>
      )}
    </>
  );
};

// <>
{
  /* <div id={styled.wrapper}>
        <div className={styled.CheckItemBox}>
          <div className={styled.order}>
            <h2>Your order summary</h2>

            {Object.keys(cartItems).map((itemId) => {
              const id = parseInt(itemId);

              const quantity = cartItems[id];

              if (quantity <= 0) {
                return null;
              }

              const product = PRODUCTS.find((p) => p.id === id);

              if (!product) {
                return null;
              }

              const { name, detail, img, price } = product;
              console.log(product);

              <div className={styled.item}>
                {img && <img src={img} alt={name} />}
                <div className={styled.info}>
                  <h4>{detail}</h4>
                  <p className="quantity">Quantity: {quantity}</p>
                  <p className="price">{price}</p>
                </div>
              </div>;
            })}
            <h4 className={styled.ship}>Shipping: FREE</h4>
            <hr />
            <h3 className={styled.total}>TOTAL: ${totalAmount}</h3>
          </div>
        </div>
      </div>
      
    </> */
}
