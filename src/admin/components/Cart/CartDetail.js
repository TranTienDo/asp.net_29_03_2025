import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CartDetail() {
  const userId = 1; // Đặt userId cố định là 1
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    fetchCartDetail();
  }, [userId]);

  const fetchCartDetail = () => {
    axios
      .get(`https://localhost:7070/api/CartDetail?userId=${userId}`) // Gọi API với userId = 1
      .then((response) => {
        setCartDetails(response.data); // Lưu dữ liệu giỏ hàng vào state
      })
      .catch((error) => {
        console.error("Lỗi khi lấy chi tiết giỏ hàng:", error);
      });
  };

  if (cartDetails.length === 0) return <div>Loading...</div>; // Chờ dữ liệu

  return (
    <div className="container mt-4">
      <h2>Chi tiết Giỏ hàng</h2>
      <hr />
      <h4>Giỏ hàng của người dùng ID: {userId}</h4>
      <div className="card card-body">
        <h5>Thông tin sản phẩm trong giỏ hàng</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng</th>
            </tr>
          </thead>
          <tbody>
            {cartDetails.map((item) => (
              <tr key={item.id}>
                <td>{item.product?.name}</td>
                <td>
                  <img
                    src={`https://localhost:7070${item.product?.image}`}
                    alt={item.product?.name}
                    width="80"
                  />
                </td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-3">
          <h5>
            Tổng tiền: $
            {cartDetails.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}
          </h5>
        </div>
      </div>
    </div>
  );
}
