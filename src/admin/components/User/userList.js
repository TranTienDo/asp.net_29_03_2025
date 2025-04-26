import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("https://localhost:7070/api/User/all")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách người dùng:", error);
      });
  };

  const deleteUser = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      axios
        .delete(`https://localhost:7070/api/User/${id}`)
        .then(() => {
          fetchUsers(); // Cập nhật lại danh sách sau khi xóa
        })
        .catch((error) => {
          console.error("Lỗi khi xóa người dùng:", error);
        });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link className="btn btn-primary mb-2 float-end" to="user/create">
            Thêm mới người dùng
          </Link>
        </div>
        <div className="col-12">
          <div className="card card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên người dùng</th>
                    <th>Email</th>
                    <th>Mật khẩu</th>
                    <th>Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Link to={`user/edit/${user.id}`}>
                              <i
                                className="fa fa-edit"
                                style={{
                                  paddingRight: "10px",
                                  cursor: "pointer",
                                }}
                              ></i>
                            </Link>
                            <i
                              className="fa fa-trash"
                              style={{
                                color: "red",
                                cursor: "pointer",
                              }}
                              onClick={() => deleteUser(user.id)}
                            ></i>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Không có người dùng nào.
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
