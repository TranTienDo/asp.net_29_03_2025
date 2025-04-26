import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import CategoryForm from "./CategoryForm";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [categoryToEdit, setCategoryToEdit] = useState(null);

  // Lấy danh sách danh mục từ API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://localhost:7070/api/Category");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        Swal.fire({
          icon: "error",
          title: "Lỗi",
          text: "Không thể tải danh mục từ máy chủ.",
        });
      }
    };

    fetchCategories();
  }, []);

  // Xử lý khi gửi form thêm/chỉnh sửa danh mục
  const handleCategoryFormSubmit = async (formData) => {
    try {
      if (formData.id) {
        // Cập nhật danh mục
        const response = await fetch(
          `https://localhost:7070/api/Category/${formData.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Cập nhật danh mục thất bại");
        }

        const updatedCategory = await response.json();
        setCategories((prev) =>
          prev.map((cat) =>
            cat.id === updatedCategory.id ? updatedCategory : cat
          )
        );
        Swal.fire({ icon: "success", text: "Cập nhật danh mục thành công" });
      } else {
        // Thêm danh mục mới
        const response = await fetch("https://localhost:7070/api/Category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
          }),
        });

        if (!response.ok) {
          throw new Error("Thêm danh mục thất bại");
        }

        const newCategory = await response.json();
        setCategories((prev) => [...prev, newCategory]);
        Swal.fire({ icon: "success", text: "Thêm danh mục thành công" });
      }
      setCategoryToEdit(null);
    } catch (error) {
      Swal.fire({ icon: "error", text: error.message });
    }
  };

  // Xử lý khi người dùng muốn chỉnh sửa danh mục
  const handleEditClick = (category) => {
    setCategoryToEdit(category);
  };

  // Xử lý khi người dùng muốn xóa danh mục
  const handleDeleteCategory = async (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Gửi yêu cầu DELETE tới API
          const response = await fetch(
            `https://localhost:7070/api/Category/${id}`,
            {
              method: "DELETE",
              headers: {
                Accept: "*/*",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Xóa danh mục thất bại");
          }

          const data = await response.json(); // Dữ liệu phản hồi từ API
          console.log(data.message); // "Xóa thành công"

          // Nếu xóa thành công, cập nhật lại danh sách danh mục
          setCategories((prev) => prev.filter((cat) => cat.id !== id));

          Swal.fire({
            icon: "success",
            title: "Thành công",
            text: "Xóa danh mục thành công!",
          });
        } catch (error) {
          console.error("Error deleting category:", error);
          Swal.fire({
            icon: "error",
            title: "Lỗi",
            text: error.message,
          });
        }
      }
    });
  };

  return (
    <div className="container">
      <h3>Quản lý danh mục</h3>
      <CategoryForm
        categoryToEdit={categoryToEdit}
        onSubmit={handleCategoryFormSubmit}
      />
      <table
        className="table table-bordered mt-4"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên danh mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <i
                  className="fa fa-edit"
                  style={{ cursor: "pointer", marginRight: "10px" }}
                  onClick={() => handleEditClick(category)}
                ></i>
                <i
                  className="fa fa-trash"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDeleteCategory(category.id)}
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
