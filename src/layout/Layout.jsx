import React from "react";
import Routers from "../Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ProductContextProvider } from "../Context/ProductContext";
function Layout() {
  return (
    <>
      <ProductContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routers></Routers>

          <Footer />
        </BrowserRouter>
      </ProductContextProvider>
    </>
  );
}

export default Layout;
