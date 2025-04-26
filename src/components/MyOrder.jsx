import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("https://localhost:7070/api/Order");
        setOrders(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy đơn hàng:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="my-order-page p-4">
      <h2 className="mb-4">Đơn hàng của tôi</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Sản phẩm</th>
            <th>Số lượng</th>
            <th>Tổng giá</th>
            <th>Trạng thái</th>
            <th>Ngày đặt hàng</th>
          </tr>
        </thead>
        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                Chưa có dữ liệu đơn hàng
              </td>
            </tr>
          ) : (
            orders.map((order, index) =>
              order.orderDetails.map((detail, idx) => (
                <tr key={`${order.id}-${detail.id}`}>
                  <td>
                    {index + 1}.{idx + 1}
                  </td>
                  <td>{detail.product?.name || "N/A"}</td>
                  <td>{detail.quantity}</td>
                  <td>{detail.price}₫</td>
                  <td>{order.status}</td>
                  <td>{new Date(order.orderDate).toLocaleString()}</td>
                </tr>
              ))
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default MyOrder;
