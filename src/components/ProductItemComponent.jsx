import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Thêm thư viện thông báo

const ProductItemComponent = ({ products, userId }) => {
  // Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = async (productId) => {
    try {
      const quantity = 1; // Số lượng mặc định là 1
      const res = await axios.post(
        `https://localhost:7070/api/Cart/add?userId=${userId}&productId=${productId}&quantity=${quantity}`
      );
      toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
      toast.error("Có lỗi khi thêm sản phẩm vào giỏ hàng");
    }
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div className="single-popular-items mb-50 text-center">
            <div className="popular-img" style={{ position: "relative" }}>
              <img
                src={
                  product.image
                    ? `https://localhost:7070/${encodeURI(
                        product.image.replace(/^\/+/, "")
                      )}`
                    : "/assets/img/gallery/popular1.png"
                }
                alt={product.name}
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="product-image"
              />
              <div className="img-cap">
                <span
                  onClick={() => handleAddToCart(product.id)}
                  style={{
                    backgroundColor: "#f86c6b",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    cursor: "pointer",
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "14px",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#ff5b5b")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#f86c6b")
                  }
                >
                  Thêm vào giỏ hàng
                </span>
              </div>
              <div className="favorit-items">
                <span className="flaticon-heart"></span>
              </div>
            </div>
            <div className="popular-caption">
              <h3>
                <Link
                  to={`/product/${product.id}`}
                  style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}
                >
                  {product.name}
                </Link>
              </h3>
              <span style={{ fontSize: "18px", color: "#f86c6b" }}>
                {Number(product.price).toLocaleString()} đ
              </span>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer /> {/* Đặt container toast */}
    </div>
  );
};

export default ProductItemComponent;
