import React from "react";
import { Link } from "react-router-dom";
import ProductAllCompoment from "../components/ProductAllCompoment";

const Home = () => {
  const headerStyle = {
    backgroundColor: "#222",
    color: "white",
    padding: "20px 0",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const heroCaptionStyle = {
    textAlign: "center",
    color: "#fff",
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "500",
  };

  const heroBtnStyle = {
    backgroundColor: "#FFD700",
    padding: "12px 25px",
    color: "#fff",
    borderRadius: "30px",
    textDecoration: "none",
    fontSize: "16px",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  };

  const heroBtnHoverStyle = {
    backgroundColor: "#FFC300",
  };

  const sliderStyle = {
    backgroundImage: 'url("assets/img/hero/slide_1.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "450px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    color: "#fff",
    textAlign: "center",
    padding: "30px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1,
  };

  return (
    <div>
      <header style={headerStyle}>{/* Header */}</header>

      <main>
        {/* Slider Area Start */}
        <div style={sliderStyle}>
          <div style={overlayStyle}></div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
              Chọn phong cách hoàn hảo mới của bạn
            </h1>
            <p style={heroCaptionStyle}>
              Để đạt được lợi ích tối thiểu, ai đó đã thực hiện một số công việc
              mà không có sự cho phép, ngoại trừ việc được hưởng lợi từ sự tiện
              lợi này là gây ra tổn hại.
            </p>
            <div>
              <Link
                to="shop"
                className="btn hero-btn"
                style={heroBtnStyle}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor =
                    heroBtnHoverStyle.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#FFD700")
                }
              >
                Mua ngay
              </Link>
            </div>
          </div>
        </div>
        {/* Slider Area End */}

        {/* Popular Items Start */}
        <div style={{ margin: "10px" }}>
          <ProductAllCompoment />
        </div>

        {/* Popular Items End */}
      </main>

      <footer />
    </div>
  );
};

export default Home;
