import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import CustomLoading from "../page/CustomLoading.jsx";

// const Login = lazy(() => import("../page/Login.jsx"));
// const SignUp = lazy(() => import("../page/Signup.jsx"));
// const Home = lazy(() => import("../components/Home.jsx"));
// const Error = lazy(() => import("../page/Error.jsx"));

import Home from "../components/Home";
import Login from "../page/Login.jsx";
import SignUp from "../page/SignUp.jsx";
import Error from "../page/Error";
import ProductList from "../components/Product/ProductList.jsx";
import Cart from "../components/Cart/Cart.jsx";
import DetailProduct from "../components/DetailProducts/DetailProduct.jsx";
import WishList from "../components/Cart/WishList.jsx";
import { CheckOut } from "../components/CheckOut/CheckOut.jsx";
import LoginContextProvider from "../Context/LoginContext.jsx";
import { RouteGard } from "../page/RouteGard.jsx";
function Routers() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/productLists" element={<ProductList />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/wishlist" element={<WishList />} />
      <Route exact path="/detailproduct/:id" element={<DetailProduct />} />
      <Route
        exact
        path="/checkout"
        element={
          <RouteGard>
            <CheckOut />
          </RouteGard>
        }
      />
      <Route exact path="*" element={<Error />} />
    </Routes>
  );
}

export default Routers;
