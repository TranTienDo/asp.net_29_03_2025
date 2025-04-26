import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Lấy ID sản phẩm từ URL
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Gọi API để lấy chi tiết sản phẩm khi có id
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7070/api/Product/${id}`
        );
        setProduct(response.data);

        // Sau khi lấy chi tiết sản phẩm, lấy danh sách sản phẩm cùng danh mục
        const categoryId = response.data.categoryId; // Giả sử có trường categoryId trong sản phẩm
        const relatedResponse = await axios.get(
          `https://localhost:7070/api/Products/Category/${categoryId}`
        );
        setRelatedProducts(relatedResponse.data);
      } catch (error) {
        console.error("Lỗi khi tải chi tiết sản phẩm:", error);
      }
    };

    fetchProductDetail();
  }, [id]); // Khi id thay đổi, useEffect sẽ chạy lại

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Sản phẩm đã được thêm vào giỏ hàng!");
  };

  // Hiển thị trạng thái loading khi đang tải dữ liệu
  if (!product) {
    return (
      <div style={{ textAlign: "center", fontSize: "1.5rem", padding: "50px" }}>
        <div>Đang tải...</div>
      </div>
    );
  }

  return (
    <div style={{ padding: "50px 0", backgroundColor: "#f9f9f9" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 15px" }}>
        <div style={{ display: "flex", gap: "40px" }}>
          {/* Phần hình ảnh sản phẩm */}
          <div
            style={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={`https://localhost:7070/${product.image}`}
              alt={product.name}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>

          {/* Phần thông tin sản phẩm */}
          <div
            style={{
              flex: "1.5",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "10px",
              }}
            >
              {product.name}
            </h2>
            <p
              style={{ fontSize: "1rem", color: "#777", marginBottom: "20px" }}
            >
              {product.description}
            </p>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#ff5b5b",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              <strong>{Number(product.price).toLocaleString()} đ</strong>
            </p>

            {/* Đánh giá 5 sao */}
            <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
              <span style={{ color: "#ffd700", fontSize: "1.5rem" }}>★</span>
              <span style={{ color: "#ffd700", fontSize: "1.5rem" }}>★</span>
              <span style={{ color: "#ffd700", fontSize: "1.5rem" }}>★</span>
              <span style={{ color: "#ffd700", fontSize: "1.5rem" }}>★</span>
              <span style={{ color: "#ccc", fontSize: "1.5rem" }}>☆</span>
              <span style={{ fontSize: "1rem", color: "#777" }}>(4/5)</span>
            </div>

            {/* Màu sắc */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "1rem", fontWeight: "600", color: "#333" }}>
                Màu sắc:
              </p>
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#ff5733",
                  marginRight: "10px",
                }}
              ></button>
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#33ff57",
                  marginRight: "10px",
                }}
              ></button>
              <button
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#3357ff",
                  marginRight: "10px",
                }}
              ></button>
            </div>

            {/* Kích thước */}
            <div style={{ marginBottom: "20px" }}>
              <p style={{ fontSize: "1rem", fontWeight: "600", color: "#333" }}>
                Kích thước:
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  marginRight: "10px",
                }}
              >
                S
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  marginRight: "10px",
                }}
              >
                M
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#f0f0f0",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                  marginRight: "10px",
                }}
              >
                L
              </button>
            </div>

            {/* Nút thêm vào giỏ hàng */}
            <button
              style={{
                padding: "12px 20px",
                backgroundColor: "#ff5b5b",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "bold",
                width: "100%",
                transition: "background-color 0.3s ease",
              }}
              onClick={addToCart}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>

        {/* Sản phẩm khác */}
        <div style={{ marginTop: "50px" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
            Sản phẩm khác bạn có thể thích
          </h3>
          <div style={{ display: "flex", gap: "20px", overflowX: "auto" }}>
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                style={{
                  width: "200px",
                  padding: "20px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                }}
                onClick={() =>
                  (window.location.href = `/product/${relatedProduct.id}`)
                }
              >
                <img
                  src={`https://localhost:7070/${relatedProduct.image}`}
                  alt={relatedProduct.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h4 style={{ fontSize: "1rem", color: "#333" }}>
                  {relatedProduct.name}
                </h4>
                <p
                  style={{
                    fontSize: "1.2rem",
                    color: "#ff5b5b",
                    fontWeight: "bold",
                  }}
                >
                  {Number(relatedProduct.price).toLocaleString()} đ
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
