import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CartList({ userId = 1 }) {
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:7070/api/CartDetail?userId=${userId}`)
      .then((response) => {
        setCartDetails(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy chi tiết giỏ hàng:", error);
      });
  }, [userId]);

  return (
    <div className="container mt-4">
      <h2>Quản lý Giỏ hàng</h2>
      <hr />
      {cartDetails.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Hình ảnh</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng</th>
              <th>Chi tiết</th>
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
                <td>
                  <Link to={`/dashboard/cart/detail/${item.cartId}`}>
                    <button className="btn btn-info">Xem chi tiết</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
