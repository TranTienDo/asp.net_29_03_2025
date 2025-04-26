import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductItemComponent from "./ProductItemComponent";

const ShopComponent = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  // Gọi API danh mục và sản phẩm
  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://localhost:7070/api/Category");
      setCategories(res.data);
      if (res.data.length > 0) {
        setCurrentCategory(res.data[0].id); // chọn danh mục đầu tiên mặc định
      }
    } catch (error) {
      console.error("Lỗi lấy danh mục:", error);
    }
  };

  // Gọi API sản phẩm từ mỗi danh mục
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://localhost:7070/api/Category");
      const allProducts = res.data.flatMap((category) => category.products); // Lấy tất cả sản phẩm từ các danh mục
      setProducts(allProducts);
    } catch (error) {
      console.error("Lỗi lấy sản phẩm:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // Lọc sản phẩm theo danh mục
  const filteredProducts = currentCategory
    ? products.filter((product) => product.categoryId === currentCategory)
    : products; // Hiển thị tất cả sản phẩm nếu không có categoryId được chọn

  const handleClick = (categoryId) => {
    setCurrentCategory(categoryId);
  };

  return (
    <div>
      <div
        id="breadcrumb"
        className="section"
        style={{
          padding: "50px 0",
          backgroundColor: "#f7f7f7",
        }}
      >
        <div className="container">
          <div className="col-md-12">
            <div className="section-title">
              <h3
                className="title"
                style={{
                  fontSize: "30px",
                  marginBottom: "20px",
                  color: "#333",
                }}
              >
                Danh mục sản phẩm
              </h3>
              <div className="section-nav">
                <ul
                  className="section-tab-nav tab-nav"
                  style={{
                    display: "flex",
                    padding: "0",
                    marginBottom: "0",
                    listStyle: "none",
                  }}
                >
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      className={`tab-nav-item ${
                        category.id === currentCategory ? "active" : ""
                      }`}
                      style={{
                        marginRight: "20px",
                      }}
                    >
                      <Link
                        onClick={() => handleClick(category.id)}
                        className="tab-nav-link"
                        style={{
                          fontSize: "16px",
                          color:
                            category.id === currentCategory
                              ? "#007bff"
                              : "#555",
                          fontWeight:
                            category.id === currentCategory ? "bold" : "normal",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div
          className="text-center"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#007bff",
          }}
        >
          <div
            style={{
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              animation: "spin 2s linear infinite",
              margin: "auto",
            }}
          ></div>
          Đang tải sản phẩm...
        </div>
      ) : (
        <ProductItemComponent products={filteredProducts} />
      )}

      <div
        className="pagination text-center mt-5"
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="pagination-btn active"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "1px solid #ddd",
            padding: "10px 20px",
            margin: "0 5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          1
        </button>
        <button
          className="pagination-btn"
          style={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            padding: "10px 20px",
            margin: "0 5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          2
        </button>
        <button
          className="pagination-btn"
          style={{
            backgroundColor: "#f0f0f0",
            border: "1px solid #ddd",
            padding: "10px 20px",
            margin: "0 5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default ShopComponent;
