import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function List() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Thêm trạng thái loading
  const [error, setError] = useState(null); // Thêm trạng thái lỗi

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://localhost:7070/api/Product")
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Xử lý sau khi dữ liệu đã được tải
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
        setError("Lỗi khi lấy dữ liệu sản phẩm, vui lòng thử lại sau.");
        setLoading(false);
      });
  };

  const deleteProduct = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
      axios
        .delete(`https://localhost:7070/api/Product/${id}`)
        .then(() => {
          fetchProducts(); // Cập nhật lại danh sách sau khi xóa
        })
        .catch((error) => {
          console.error("Lỗi khi xóa sản phẩm:", error);
        });
    }
  };

  if (loading) {
    return <div className="text-center">Đang tải dữ liệu...</div>; // Hiển thị loading
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>; // Hiển thị lỗi nếu có
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link
            className="btn btn-primary mb-2 float-end"
            to="/dashboard/product/create"
          >
            Thêm mới
          </Link>
        </div>
        <div className="col-12">
          <div className="card card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Chi tiết</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 ? (
                    products.map((row) => (
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>
                          <img
                            width="100px"
                            src={`https://localhost:7070${row.image}`}
                            alt="Product"
                          />
                        </td>
                        <td>{row.description}</td>
                        <td>{row.price}</td>
                        <td>{row.stock}</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Link to={`/dashboard/product/edit/${row.id}`}>
                              <i
                                className="fa fa-edit"
                                style={{
                                  paddingRight: "10px",
                                  cursor: "pointer",
                                  color: "#4caf50",
                                  transition: "color 0.3s",
                                }}
                                onMouseOver={(e) =>
                                  (e.target.style.color = "#45a049")
                                }
                                onMouseOut={(e) =>
                                  (e.target.style.color = "#4caf50")
                                }
                              ></i>
                            </Link>
                            <i
                              className="fa fa-trash"
                              style={{
                                color: "red",
                                cursor: "pointer",
                                transition: "color 0.3s",
                              }}
                              onClick={() => deleteProduct(row.id)}
                              onMouseOver={(e) =>
                                (e.target.style.color = "#f44336")
                              }
                              onMouseOut={(e) => (e.target.style.color = "red")}
                            ></i>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center">
                        Không có sản phẩm nào.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
