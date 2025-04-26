import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterComponent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // Trạng thái lỗi

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.password_confirmation) {
      setErrorMessage("Mật khẩu xác nhận không khớp.");
      return;
    }

    try {
      const res = await axios.post("https://localhost:7070/api/Auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (res.data.token) {
        localStorage.setItem("authToken", res.data.token);
        alert("Đăng ký thành công!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Lỗi đăng ký:", error);
      setErrorMessage("Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.");
    }
  };

  return (
    <div className="register-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text text-center">
          <h2>Đăng Ký Tài Khoản</h2>
        </div>
      </div>

      {/* Register Form */}
      <section className="register-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="info-text text-center">
                <h2>Đã có tài khoản?</h2>
                <p>
                  Nếu bạn đã có tài khoản, vui lòng đăng nhập để tiếp tục trải
                  nghiệm dịch vụ của chúng tôi.
                </p>
                <Link to="/login" className="btn btn-login">
                  Đăng Nhập
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="form-container">
                <h3>
                  Chào Mừng! <br /> Vui Lòng Đăng Ký Ngay
                </h3>

                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}

                <form onSubmit={handleSubmit} className="register-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Tên Đăng Nhập"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Mật Khẩu"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password_confirmation"
                      placeholder="Nhập Lại Mật Khẩu"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-submit">
                      Đăng Ký
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterComponent;
