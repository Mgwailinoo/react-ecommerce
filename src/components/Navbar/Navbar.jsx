import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ProductContext } from "../../Context/ProductContext";
import Box from "@mui/material/Box";
import userProfile from "../../assets/profile1.png";
import Modal from "@mui/material/Modal";

import { menuItems } from "./MenuItem";
import Login from "../../page/Login";
import SignUp from "../../page/SignUp";
import { useLoginContext } from "../../Context/LoginContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#000",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openBox, setOpenBox] = React.useState(false);
  const { loggedIn, setLoggedIn } = useLoginContext();
  const handleOpenBox = () => setOpenBox(true);
  const handleCloseBox = () => setOpenBox(false);
  const { getTotalCart, wishlist } = useContext(ProductContext);
  const totalCart = getTotalCart();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#000",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className={styles.navContainer}>
        <div
          style={{
            width: "83%",
            margin: "auto",
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link to="/" className={styles.logoText}>
            KACY <span>Beauty</span>
          </Link>
          <div className={styles.navLinkContainer}>
            <ul>
              {menuItems.map((menu, index) => {
                return (
                  <>
                    <Button onClick={handleClick} sx={{ color: "#fff" }}>
                      {menu.title}
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {menu.submenu.map((items) => (
                        <MenuItem onClick={handleClose} key={items.id}>
                          {items.title}
                        </MenuItem>
                      ))}
                    </Menu>
                  </>
                );
              })}
            </ul>
            <div className={styles.navLinkContainer}>
              <span style={{ padding: "10px" }}>
                <svg
                  fill="#fff"
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                </svg>
              </span>

              <span style={{ padding: "10px" }} className={styles.cartBtn}>
                <Link to="/wishlist">
                  <svg
                    fill="#fff"
                    width="20px"
                    height="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                  </svg>
                </Link>
                <span className={styles.cartBadge}>{wishlist.length}</span>
              </span>

              <span style={{ padding: "10px" }} className={styles.cartBtn}>
                <Link to="/cart">
                  <svg
                    fill="#fff"
                    width="20px"
                    height="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                </Link>
                <span className={styles.cartBadge}>{totalCart}</span>
              </span>

              <>
                {!loggedIn ? (
                  <>
                    {" "}
                    <span onClick={handleOpenBox}>
                      <span style={{ padding: "10px" }}>
                        <svg
                          fill="#fff"
                          width="20px"
                          height="20px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" />
                        </svg>
                      </span>
                    </span>
                    <Modal
                      open={openBox}
                      onClose={handleCloseBox}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Login />
                      </Box>
                    </Modal>
                  </>
                ) : (
                  <div className={styles.userProfile}>
                    <img src={userProfile} className={styles.userImg} />
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
