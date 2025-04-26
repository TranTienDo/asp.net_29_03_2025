import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductAllComponent = () => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(1); // Giả sử userId là 1

  const handleAddToCart = async (productId) => {
    try {
      const quantity = 1; // Số lượng mặc định là 1
      const res = await axios.post(
        `https://localhost:7070/api/Cart/add?userId=${userId}&productId=${productId}&quantity=${quantity}`
      );
      alert(res.data); // Hiển thị thông báo khi thêm sản phẩm thành công
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
      alert("Có lỗi khi thêm sản phẩm vào giỏ hàng");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://localhost:7070/api/Product");
        setProducts(res.data);
      } catch (error) {
        console.error("Lỗi khi tải sản phẩm:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="popular-items">
      <div className="container" style={{ padding: "0 15px" }}>
        <div className="section-tittle mb-70 text-center">
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#333" }}>
            Sản Phẩm Phổ Biến
          </h2>
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "30px" }}>
            Đây là những sản phẩm được yêu thích nhất, mang lại chất lượng và sự
            tiện ích tuyệt vời cho bạn.
          </p>
        </div>

        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div key={product.id} className="col">
              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                className="single-popular-items text-center"
              >
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
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      transition: "transform 0.3s ease",
                    }}
                  />
                  <div
                    className="img-cap"
                    style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: "12px 25px",
                      borderRadius: "20px",
                      color: "#fff",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <span
                      onClick={() => handleAddToCart(product.id)}
                      style={{ padding: "5px 15px" }}
                    >
                      Thêm vào giỏ hàng
                    </span>
                  </div>
                  <div
                    className="favorit-items"
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      cursor: "pointer",
                      backgroundColor: "rgba(255, 91, 91, 0.2)",
                      borderRadius: "50%",
                      padding: "5px",
                    }}
                  >
                    <span
                      className="flaticon-heart"
                      style={{ fontSize: "1.5rem", color: "#ff5b5b" }}
                    ></span>
                  </div>
                </div>
                <div className="popular-caption" style={{ padding: "20px" }}>
                  <h3>
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        textDecoration: "none",
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: "#333",
                        transition: "color 0.3s ease",
                        ":hover": { color: "#FFD700" },
                      }}
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      color: "#ff5b5b",
                      fontWeight: "bold",
                    }}
                  >
                    {Number(product.price).toLocaleString()} đ
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAllComponent;
