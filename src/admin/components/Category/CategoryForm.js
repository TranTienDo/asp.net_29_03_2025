import React, { useState, useEffect } from "react";

const CategoryForm = ({ categoryToEdit, onSubmit }) => {
  const [name, setName] = useState("");

  // Nếu có danh mục để chỉnh sửa, tải dữ liệu vào form
  useEffect(() => {
    if (categoryToEdit) {
      setName(categoryToEdit.name);
    } else {
      setName(""); // Nếu không có danh mục nào, reset form
    }
  }, [categoryToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: categoryToEdit?.id, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Tên danh mục</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {categoryToEdit ? "Cập nhật" : "Thêm"} danh mục
      </button>
    </form>
  );
};

export default CategoryForm;
