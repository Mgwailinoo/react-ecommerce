import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import "./Cart.css";

export const CartItem = (props) => {
  const { id, name, details, price, img } = props.data;

  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ProductContext);
  const totalAmount = getTotalCartAmount();
  return (
    <>
      <div>
        <div className="cart-items">
          <div className="cart-item">
            <div className="cart-product">
              <img src={img} alt="cart-product-name" />
              <div>
                <h3>{name}</h3>
                <p>{details}</p>
                <button className="btn-remove">Remove</button>
              </div>
            </div>
            <div className="cart-product-price">${price}</div>
            <div className="cart-product-quantity">
              <button onClick={() => removeFromCart(id)} className="btn-red">
                -
              </button>
              <div
                className="count"
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              >
                {cartItems[id]}
              </div>
              <button onClick={() => addToCart(id)} className="btn-green">
                +
              </button>
            </div>
            <div
              className="cart-product-total-price"
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            >
              {cartItems[id] * price}
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="cartItem">
    //   <img src={img} />
    //   <div className="description">
    //     <p>
    //       <b>{name}</b>
    //     </p>

    //     <p>{price} $</p>
    //     <div className="countHandler">
    //       <button onClick={() => removeFromCart(id)} className="cartBtn">
    //         <span>-</span>
    //       </button>
    //       <input
    //         value={cartItems[id]}
    //         onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
    //       />
    //       <button onClick={() => addToCart(id)} className="cartBtn">
    //         <span>+</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};
