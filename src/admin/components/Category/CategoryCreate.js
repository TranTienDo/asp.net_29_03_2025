// CategoryList.js
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import CategoryForm from "./CategoryForm";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [categoryToEdit, setCategoryToEdit] = useState(null);

  useEffect(() => {
    // Fetch categories from the API
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

  const handleCategoryFormSubmit = (formData) => {
    // Add new category
    const newCategory = { id: categories.length + 1, name: formData.name };
    setCategories((prev) => [...prev, newCategory]);
    Swal.fire({ icon: "success", text: "Thêm danh mục thành công" });
  };

  const handleDeleteCategory = (id) => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        setCategories((prev) => prev.filter((cat) => cat.id !== id));
        Swal.fire({ icon: "success", text: "Xóa danh mục thành công" });
      }
    });
  };

  const handleEditClick = (category) => {
    setCategoryToEdit(category);
  };

  return (
    <div className="container">
      <h3>Quản lý danh mục</h3>
      <CategoryForm onSubmit={handleCategoryFormSubmit} />
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
