import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    <aside
      className="main-sidebar sidebar-dark-primary elevation-4"
      style={{ minHeight: "100vh", width: "220px" }} // Điều chỉnh width của sidebar
    >
      <div className="brand-link text-center py-2">
        <Link to="/dashboard" className="d-block">
          <img
            src="/assets/img/logo/logotiedo.png"
            alt="Logo"
            style={{ height: "70px" }} // Giảm kích thước logo
          />
        </Link>
      </div>

      <div className="sidebar" style={{ paddingTop: "10px" }}>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
            style={{ paddingLeft: "10px" }} // Giảm padding bên trái
          >
            <li className={`nav-item menu-is-opening menu-open`}>
              <Link
                to="/dashboard"
                className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
                style={{ fontSize: "14px" }} // Giảm font-size của các mục menu
              >
                <i className="nav-icon fa fa-table" style={{ fontSize: "16px" }} /> {/* Giảm kích thước icon */}
                <p>
                  Quản lý
                  <i className="fa fa-angle-left right" />
                </p>
              </Link>

              <ul className="nav nav-treeview" style={{ display: "block" }}>
                <li className="nav-item">
                  <Link
                    to="/dashboard/product"
                    className={`nav-link ${isActive("/product") ? "active" : ""}`}
                    style={{ fontSize: "14px" }}
                  >
                    <i className="fa fa-circle nav-icon" style={{ fontSize: "12px" }} />
                    <p>Sản phẩm</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/dashboard/category"
                    className={`nav-link ${isActive("/category") ? "active" : ""}`}
                    style={{ fontSize: "14px" }}
                  >
                    <i className="fa fa-circle nav-icon" style={{ fontSize: "12px" }} />
                    <p>Danh mục</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/dashboard/user"
                    className={`nav-link ${isActive("/user") ? "active" : ""}`}
                    style={{ fontSize: "14px" }}
                  >
                    <i className="fa fa-circle nav-icon" style={{ fontSize: "12px" }} />
                    <p>User</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/dashboard/cart"
                    className={`nav-link ${isActive("/cart") ? "active" : ""}`}
                    style={{ fontSize: "14px" }}
                  >
                    <i className="fa fa-circle nav-icon" style={{ fontSize: "12px" }} />
                    <p>Cart</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/dashboard/order"
                    className={`nav-link ${isActive("/order") ? "active" : ""}`}
                    style={{ fontSize: "14px" }}
                  >
                    <i className="fa fa-circle nav-icon" style={{ fontSize: "12px" }} />
                    <p>Order</p>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
