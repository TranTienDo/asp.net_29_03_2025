import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="header-area">
      <div className="main-header header-sticky">
        <div className="container-fluid">
          <div className="menu-wrapper">
            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <img
                  src="assets/img/logo/logotiedo.png"
                  alt="Logo"
                  style={{
                    width: "150px",
                    height: "auto",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="logo-img"
                />
              </Link>
            </div>

            {/* Main-menu */}
            <div className="main-menu d-none d-lg-block">
              <nav>
                <ul
                  id="navigation"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    listStyle: "none",
                    marginBottom: 0,
                  }}
                >
                  <li style={{ margin: "0 20px", transition: "all 0.3s ease" }}>
                    <Link
                      to="/"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Trang Chủ
                    </Link>
                  </li>
                  <li style={{ margin: "0 20px" }}>
                    <Link
                      to="/shop"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Cửa Hàng
                    </Link>
                  </li>
                  <li style={{ margin: "0 20px" }}>
                    <Link
                      to="/about"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                    >
                      Giới Thiệu
                    </Link>
                  </li>
                  <li className="hot" style={{ margin: "0 20px" }}>
                    <a
                      href="#"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333",
                        textDecoration: "none",
                      }}
                    >
                      Mới Nhất
                    </a>
                    <ul className="submenu">
                      <li>
                        <Link to="/shop">Danh Sách Sản Phẩm</Link>
                      </li>
                      {/* <li>
                        <Link to="/product_details">Chi Tiết Sản Phẩm</Link>
                      </li> */}
                    </ul>
                  </li>
                  <li style={{ margin: "0 20px" }}>
                    <Link
                      to="/blog"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333",
                        textDecoration: "none",
                      }}
                    >
                      Blog
                    </Link>
                  </li>
                  <li style={{ margin: "0 20px" }}>
                    <a
                      href="#"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333",
                        textDecoration: "none",
                      }}
                    >
                      Trang
                    </a>
                    <ul className="submenu">
                      {!user && (
                        <li>
                          <Link to="/login">Đăng Nhập</Link>
                        </li>
                      )}
                      <li>
                        <Link to="/cart">Giỏ Hàng</Link>
                      </li>
                      <li>
                        <Link to="/checkout">Thanh Toán</Link>
                      </li>
                      <li>
                        <Link to="/MyOrder">Đơn hàng của tôi</Link>
                      </li>
                    </ul>
                  </li>
                  <li style={{ margin: "0 20px" }}>
                    <Link
                      to="/contact"
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333",
                        textDecoration: "none",
                      }}
                    >
                      Liên Hệ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Header Right */}
            <div className="header-right" style={{ display: "flex", alignItems: "center" }}>
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 0,
                  padding: 0,
                }}
              >
                <li>
                  <div
                    className="nav-search search-switch"
                    onClick={toggleSearch}
                    style={{
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "#333",
                    }}
                  >
                    <span className="flaticon-search" />
                  </div>
                </li>

                {/* Hiển thị tên người dùng nếu đã đăng nhập */}
                <li style={{ position: "relative", margin: "0 20px" }}>
                  {user ? (
                    <div className="user-dropdown" style={{ position: "relative" }}>
                      <span
                        style={{
                          cursor: "pointer",
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#333",
                          transition: "color 0.3s ease",
                        }}
                        onClick={toggleDropdown}
                      >
                        👤 {user.Name}
                      </span>
                      {isDropdownOpen && (
                        <div
                          className="submenu"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            background: "#fff",
                            padding: "10px",
                            border: "1px solid #ddd",
                            zIndex: 1000,
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={handleLogout}
                            style={{
                              padding: "5px 10px",
                              backgroundColor: "#ff4d4d",
                              border: "none",
                              borderRadius: "5px",
                              color: "#fff",
                              cursor: "pointer",
                              transition: "background-color 0.3s ease",
                            }}
                          >
                            Đăng Xuất
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link to="/login">
                      <span className="flaticon-user" style={{ fontSize: "20px" }} />
                    </Link>
                  )}
                </li>

                <li>
                  <Link to="/cart">
                    <span
                      className="flaticon-shopping-cart"
                      style={{
                        fontSize: "20px",
                        color: "#333",
                        transition: "color 0.3s ease",
                      }}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="col-12">
            <div className="mobile_menu d-block d-lg-none" />
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div
          className="search-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Tìm kiếm..."
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "none",
              width: "300px",
            }}
          />
          <button
            onClick={toggleSearch}
            className="close-search"
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "30px",
              position: "absolute",
              top: "20px",
              right: "20px",
            }}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
