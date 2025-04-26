import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Thêm trạng thái cho thông báo lỗi
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy user từ localStorage (nếu đã login)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.name); // Hiển thị tên người dùng nếu đã lưu
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset lỗi trước khi gọi API

    try {
      const res = await axios.post("https://localhost:7070/api/User/login", {
        email,
        password,
      });

      // Lưu thông tin người dùng và token vào localStorage
      const user = {
        id: res.data.user.id,
        name: res.data.user.name,
        email: res.data.user.email,
      };

      localStorage.setItem("authToken", res.data.token); // Lưu token vào localStorage
      localStorage.setItem("user", JSON.stringify(user)); // Lưu thông tin người dùng vào localStorage

      setUserName(user.name); // Cập nhật tên người dùng vào state

      alert("Đăng nhập thành công!");

      const redirectTo = localStorage.getItem("redirectTo") || "/";
      navigate(redirectTo);
      localStorage.removeItem("redirectTo"); // Xóa redirectTo sau khi sử dụng
    } catch (err) {
      console.error(err);
      setErrorMessage("Sai tài khoản hoặc mật khẩu!"); // Hiển thị thông báo lỗi
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div>
      {/* Hiển thị tên người dùng nếu đã đăng nhập */}
      {userName && <p>Xin chào, {userName}</p>}

      <section
        className="login-part"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Đăng Nhập</h2>

          {/* Hiển thị thông báo lỗi nếu có */}
          {errorMessage && (
            <div
              style={{
                backgroundColor: "#f8d7da",
                color: "#721c24",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "15px",
              }}
            >
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "15px" }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Đăng Nhập
            </button>
          </form>

          <div style={{ marginTop: "20px" }}>
            <a
              href="#"
              onClick={handleForgotPassword}
              style={{
                color: "#007bff",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Quên mật khẩu?
            </a>
          </div>

          <div style={{ marginTop: "15px" }}>
            <p>
              Mới đến cửa hàng?{" "}
              <Link to="/register" style={{ color: "#007bff" }}>
                Tạo tài khoản
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginComponent;
