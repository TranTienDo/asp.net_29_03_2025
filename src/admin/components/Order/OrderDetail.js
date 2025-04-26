import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function OrderDetail() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    // Lấy đơn hàng cụ thể
    axios
      .get(`https://localhost:7070/api/Order/${orderId}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.error("Lỗi lấy đơn hàng:", err));

    // Lấy chi tiết đơn hàng
    axios
      .get("https://localhost:7070/api/OrderDetail/orderdetails")
      .then((res) => {
        const filtered = res.data.filter(
          (item) => item.orderId === parseInt(orderId)
        );
        setOrderDetails(filtered);
      })
      .catch((err) => console.error("Lỗi lấy chi tiết đơn hàng:", err));
  }, [orderId]);

  return (
    <div className="container my-4">
      <h4>Chi tiết đơn hàng #{orderId}</h4>
      {order ? (
        <div className="card card-body mb-4">
          <p>
            <strong>Người dùng ID:</strong> {order.userId}
          </p>
          <p>
            <strong>Ngày đặt:</strong>{" "}
            {new Date(order.orderDate).toLocaleString()}
          </p>
          <p>
            <strong>Tổng tiền:</strong> ${order.totalPrice}
          </p>
          <p>
            <strong>Trạng thái:</strong> {order.status}
          </p>
        </div>
      ) : (
        <p>Đang tải thông tin đơn hàng...</p>
      )}

      <h5>Sản phẩm trong đơn hàng</h5>
      {orderDetails.length > 0 ? (
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {orderDetails.map((item) => (
              <tr key={item.id}>
                <td>{item.productId}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Không có sản phẩm nào trong đơn hàng.</p>
      )}
    </div>
  );
}
