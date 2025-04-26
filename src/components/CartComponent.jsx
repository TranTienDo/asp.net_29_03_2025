import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CartComponent = () => {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Lấy thông tin user từ localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  const fetchCartData = async () => {
    try {
      const res = await axios.get(
        `https://localhost:7070/api/Cart/get/${userId}`
      );
      console.log("Kết quả giỏ hàng:", res.data);
      setCartData(res.data.cartDetails);
    } catch (error) {
      console.error("Lỗi khi tải giỏ hàng:", error.response || error);
      alert("Không thể tải giỏ hàng. Kiểm tra lại userId hoặc API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Kiểm tra xem user có tồn tại trong localStorage không
    if (!user) {
      alert("Bạn chưa đăng nhập!");
      navigate("/login");
      return;
    }

    if (!userId) {
      alert("Không lấy được userId từ user!");
      navigate("/login");
      return;
    }
    console.log(localStorage.getItem("user"));

    // Nếu hợp lệ thì gọi API lấy giỏ hàng
    fetchCartData();
  }, []);

  const subtotal = cartData.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      const orderDetails = cartData.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      }));

      const response = await axios.post("https://localhost:7070/api/Order", {
        userId,
        orderDetails,
      });

      if (response.data.message === "Đặt hàng thành công") {
        alert("Đặt hàng thành công!");
        navigate("/orders");
      }
    } catch (error) {
      console.error("Lỗi khi đặt hàng:", error);
      alert("Có lỗi khi đặt hàng, vui lòng thử lại.");
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`https://localhost:7070/api/CartDetail/${itemId}`);
      setCartData(cartData.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      alert("Có lỗi khi xóa sản phẩm.");
    }
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const item = cartData.find((i) => i.id === itemId);
    if (!item || newQuantity < 1) return;

    try {
      const updatedItem = {
        id: item.id,
        cartId: item.cartId,
        productId: item.product.id,
        quantity: newQuantity,
        price: item.product.price,
      };

      await axios.put(
        `https://localhost:7070/api/CartDetail/${itemId}`,
        updatedItem
      );

      setCartData((prev) =>
        prev.map((i) => (i.id === itemId ? { ...i, quantity: newQuantity } : i))
      );
    } catch (error) {
      console.error("Lỗi khi cập nhật số lượng:", error);
      alert("Có lỗi khi cập nhật số lượng.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-10 shadow-inner mb-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 tracking-wide">
            🛒 Danh Sách Giỏ Hàng
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Kiểm tra các sản phẩm bạn đã thêm vào giỏ hàng
          </p>
        </div>
      </div>

      {/* Giỏ hàng */}
      <section className="cart_area section_padding bg-gray-100">
        <div className="container">
          <div className="cart_inner bg-white p-8 rounded-lg shadow-md">
            <div className="table-responsive">
              <table className="table">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="text-left py-3 px-4">Sản Phẩm</th>
                    <th className="text-center py-3 px-4">Giá</th>
                    <th className="text-center py-3 px-4">Số Lượng</th>
                    <th className="text-center py-3 px-4">Tổng Cộng</th>
                    <th className="text-center py-3 px-4">Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4 px-4 flex items-center">
                        <img
                          src={`https://localhost:7070${item.product.image}`}
                          alt={item.product.name}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                          className="mr-4"
                        />
                        <span>{item.product.name}</span>
                      </td>
                      <td className="text-center py-4 px-4">
                        <h5>{item.product.price.toLocaleString()} đ</h5>
                      </td>
                      <td className="text-center py-4 px-4">
                        <div className="product_count d-flex justify-center items-center">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity - 1)
                            }
                            className="btn btn-sm btn-light px-3 py-1 mr-2"
                          >
                            –
                          </button>
                          <input
                            className="mx-2 text-center w-10 h-8 rounded-md border-2 border-gray-300"
                            type="text"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.id, item.quantity + 1)
                            }
                            className="btn btn-sm btn-light px-3 py-1 ml-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-center py-4 px-4">
                        <h5>
                          {(
                            item.product.price * item.quantity
                          ).toLocaleString()}{" "}
                          đ
                        </h5>
                      </td>
                      <td className="text-center py-4 px-4">
                        <button
                          className="btn_1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                          onClick={() => handleDeleteItem(item.id)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="3" />
                    <td className="text-center py-4 px-4">
                      <h5 className="font-bold">Tổng Phụ</h5>
                    </td>
                    <td className="text-center py-4 px-4">
                      <h5 className="font-bold">
                        {subtotal.toLocaleString()} đ
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="checkout_btn_inner float-right">
                <Link
                  className="btn_1 bg-gray-300 text-gray-800 py-2 px-6 rounded-md hover:bg-gray-400 transition duration-300"
                  to="/shop"
                >
                  Tiếp Tục Mua Sắm
                </Link>
                <button
                  className="btn_1 checkout_btn_1 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
                  onClick={handleCheckout}
                >
                  Tiến Hành Thanh Toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartComponent;
