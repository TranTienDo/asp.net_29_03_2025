import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios
      .get("https://localhost:7070/api/Order")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách đơn hàng:", error);
      });
  };

  const deleteOrder = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đơn hàng này không?")) {
      axios
        .delete(`https://localhost:7070/api/Order/${id}`)
        .then(() => {
          fetchOrders(); // Cập nhật danh sách sau khi xóa
        })
        .catch((error) => {
          console.error("Lỗi khi xóa đơn hàng:", error);
        });
    }
  };

  return (
    <div className="container">
      <h3 className="my-3">Danh sách đơn hàng</h3>
      <div className="card card-body">
        <div className="table-responsive">
          <table className="table table-bordered mb-0 text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Người dùng</th>
                <th>Ngày đặt</th>
                <th>Tổng tiền</th>
                <th>Trạng thái</th>
                <th>Chi tiết</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.userId}</td>
                    <td>{new Date(order.orderDate).toLocaleString()}</td>
                    <td>${order.totalPrice}</td>
                    <td>{order.status}</td>
                    <td>
                      {order.orderDetails.length > 0 ? (
                        <ul className="text-start">
                          {order.orderDetails.map((detail) => (
                            <li key={detail.id}>
                              {detail.product?.name} - SL: {detail.quantity} - $
                              {detail.price}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <em>Không có sản phẩm</em>
                      )}
                    </td>
                    <td>
                      <Link to={`orders/${order.id}`}>
                        <i
                          className="fa fa-eye"
                          style={{ cursor: "pointer", color: "#007bff" }}
                        ></i>
                      </Link>
                    </td>
                    <td>
                      <i
                        className="fa fa-trash"
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => deleteOrder(order.id)}
                      ></i>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">Không có đơn hàng nào.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
