import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { ProductsDetail } from "./DetailProducts";
import styles from "../DetailProducts/DetailProduct.module.css";
import { ProductContext } from "../../Context/ProductContext";
import { ProductsList as PRODUCTS } from "../../data/products";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "react-image-gallery/styles/css/image-gallery.css";
import { ImageGallery } from "react-image-gallery";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const DetailProduct = (props) => {
  const [img, setImg] = useState(0);
  const [show, setShow] = useState(false);
  const products = ProductsDetail;
  let { id } = useParams();
  id = parseInt(id);
  const product = PRODUCTS.find((item) => item.id === id);
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ProductContext);

  const handleTab = (index) => {
    setImg(index);
  };

  return (
    <>
      {products.map((item) => (
        <div className={styles.container} key={item.id}>
          <div className={styles.details}>
            <div className={styles.leftBox}>
              <div className={styles.bigImg}>
                <img src={product.img} alt="" />
              </div>
              <div className={styles.thumb}>
                {item.src.map((img, index) => (
                  <img
                    src={img}
                    alt=""
                    className={styles.thumbImg}
                    key={index}
                    onClick={() => handleTab(index)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.rightBox}>
              <div className={styles.row}>
                <h2>{item.details}</h2>
                <span>{product.price}$</span>
              </div>
              <div className={styles.colors}>
                {item.colors.map((color, index) => (
                  <button style={{ background: color }} key={index}></button>
                ))}
              </div>
              <p>{item.description}</p>
              <p>{item.content}</p>

              <div className={styles.countHandler}>
                <button
                  onClick={() => {
                    if (cartItems[id] > 0) {
                      removeFromCart(id);
                    }
                  }}
                  className={styles.cartBtn}
                >
                  -
                </button>
                <input
                  value={cartItems[id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), id)
                  }
                />
                <button
                  onClick={() => addToCart(id)}
                  className={styles.cartBtn}
                >
                  +
                </button>
              </div>

              <button className={styles.cart} onClick={() => addToCart(id)}>
                Add to Cart
              </button>
            </div>
          </div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              onClick={() => setShow(!show)}
            >
              <Typography>{show ? "ShowLess" : "ShowMore"}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className={styles.aboutDetailProduct}>
                  <h4>About the Product</h4>
                  <div className={styles.subPara}>
                    <span className={styles.cartSubTitle}>What it is</span>
                    <p>{item.ProductContent}</p>
                  </div>
                  <div className={styles.subPara}>
                    <span className={styles.cartSubTitle}>
                      What Else You Need To Know
                    </span>
                    <p>{item.ProductContentLong}</p>
                  </div>

                  <div className={styles.ProductAccordion}>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Ingredients</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography>How to Use</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </>
  );
};

export default DetailProduct;
