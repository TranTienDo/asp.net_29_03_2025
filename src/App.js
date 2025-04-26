import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Pages from "./pages/Pages";
import ProductDetail from "./pages/products/ProductDetails";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/auth/Login";
import Cart from "./pages/cart/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/auth/Register";
import ProductItem from "./pages/products/ProductItem";
import Shop from "./pages/products/Shop";

import MyOrder from "./components/MyOrder";
import PaymentHistory from "./components/PaymentHistory";
import Admin from "./admin/Admin";
import CreateProduct from "./admin/components/Product/create.component";
import EditProduct from "./admin/components/Product/edit.component";
import CategoryList from "./admin/components/Category/CategoryList";
import List from "./admin/components/Product/list.component";
import CategoryCreate from "./admin/components/Category/CategoryCreate";
import UserList from "./admin/components/User/userList.js";
import CartList from "./admin/components/Cart/cartList.js";
import OrderList from "./admin/components/Order/orderList.js";
import OrderDetail from "./admin/components/Order/OrderDetail.js";
import CartDetail from "./admin/components/Cart/CartDetail.js";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/dashboard");

  return (
    <div className="App">
      {!isAdminRoute && <Header />}

      <Routes>
        {/* Main application routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/MyOrder" element={<MyOrder />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product_item" element={<ProductItem />} />
        <Route path="/history" element={<PaymentHistory />} />

        {/* Admin dashboard routes */}
        <Route path="/dashboard" element={<Admin />}>
          <Route path="product" element={<List />} />
          <Route path="product/create" element={<CreateProduct />} />
          <Route path="product/edit/:id" element={<EditProduct />} />
          <Route path="category" element={<CategoryList />} />
          <Route path="category/create" element={<CategoryCreate />} />
          <Route path="user" element={<UserList />} />
          <Route path="cart" element={<CartList userId={1} />} />
          <Route path="order" element={<OrderList />} />
          <Route path="order/orders/:orderId" element={<OrderDetail />} />
          <Route path="cart/detail/:cartId" element={<CartDetail />} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
