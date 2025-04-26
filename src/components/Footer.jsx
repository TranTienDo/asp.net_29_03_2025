import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#2d3748", padding: "3rem 0", color: "#fff" }}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
            <div className="single-footer-caption mb-50">
              <div className="footer-logo">
                <a href="index.html" aria-label="Trang chủ">
                  <img
                    src="assets/img/logo/logotiedo.png"
                    alt="Logo Footer"
                    style={{ maxWidth: "150px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Liên kết nhanh</h4>
                <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Ưu đãi & Giảm giá
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Nhận mã giảm giá
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Sản phẩm mới</h4>
                <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Quần áo nữ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Phụ kiện thời trang
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Phụ kiện nam
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Đồ chơi cao su
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
            <div className="single-footer-caption mb-50">
              <div className="footer-tittle">
                <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Hỗ trợ</h4>
                <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Điều khoản & Điều kiện
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Chính sách bảo mật
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      style={{
                        color: "#edf2f7",
                        textDecoration: "none",
                        transition: "color 0.3s ease",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
                      onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
                    >
                      Báo cáo vấn đề thanh toán
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copy Right */}
        <div className="row align-items-center justify-content-center">
  <div className="col-xl-5 col-lg-4 col-md-5">
    <div className="footer-copy-right f-right">
      <div className="footer-social">
        <a
          href="#"
          aria-label="Twitter"
          style={{
            color: "#edf2f7",
            fontSize: "20px",
            marginRight: "10px",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
          onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://www.facebook.com/sai4ull"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={{
            color: "#edf2f7",
            fontSize: "20px",
            marginRight: "10px",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
          onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="#"
          aria-label="Behance"
          style={{
            color: "#edf2f7",
            fontSize: "20px",
            marginRight: "10px",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
          onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
        >
          <i className="fab fa-behance" />
        </a>
        <a
          href="#"
          aria-label="Website"
          style={{
            color: "#edf2f7",
            fontSize: "20px",
            transition: "color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.color = "#e53e3e")}
          onMouseOut={(e) => (e.target.style.color = "#edf2f7")}
        >
          <i className="fas fa-globe" />
        </a>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Footer;
