import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EditProduct() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    CategoryId: "",
    quantity: "",
    image: null,
  });

  useEffect(() => {
    // Fetch the product data
    axios
      .get(`https://localhost:7070/api/Product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setFormData({
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          CategoryId: response.data.categoryId,
          quantity: response.data.stock,
          image: null,
        });
      })
      .catch((error) => {
        console.error("Lỗi khi lấy sản phẩm:", error);
        alert("Không thể tải sản phẩm.");
      });
  }, [id]); // Re-run effect when ID changes

  useEffect(() => {
    // Fetch categories
    axios
      .get("https://localhost:7070/api/Category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh mục:", error);
        alert("Không thể tải danh mục.");
      });
  }, []);

  const changeHandler = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setFormData((prevState) => ({ ...prevState, image: files[0] }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formDataToSubmit = new FormData();

    // Append regular form data
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("price", formData.price);
    formDataToSubmit.append("CategoryId", formData.CategoryId);
    formDataToSubmit.append("quantity", formData.quantity);

    // Check if there is an image and append it to FormData
    if (formData.image) {
      formDataToSubmit.append("ImageFile", formData.image); // Ensure the file is appended correctly
    }

    // Sending the PUT request with FormData
    axios
      .put(`https://localhost:7070/api/Product/${id}`, formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensuring the header is set correctly for file upload
        },
      })
      .then((response) => {
        alert("Cập nhật sản phẩm thành công!");
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        alert("Có lỗi xảy ra, vui lòng thử lại.");
      });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Cập nhật sản phẩm</h4>
              <hr />
              <Form onSubmit={submitHandler}>
                <Row>
                  <Col>
                    <Form.Group controlId="Name">
                      <Form.Label>Tên sản phẩm</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={changeHandler}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Form.Group controlId="Description">
                      <Form.Label>Chi tiết</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={changeHandler}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Form.Group controlId="Price">
                      <Form.Label>Giá</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={changeHandler}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="CategoryID">
                      <Form.Label>Danh mục</Form.Label>
                      <Form.Control
                        as="select"
                        name="CategoryId"
                        value={formData.CategoryId}
                        onChange={changeHandler}
                      >
                        <option value="">Chọn danh mục</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="Quantity">
                      <Form.Label>Số lượng</Form.Label>
                      <Form.Control
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={changeHandler}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="Image" className="mb-3">
                      <Form.Label>Hình ảnh</Form.Label>
                      <Form.Control
                        type="file"
                        name="image"
                        onChange={changeHandler}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  className="mt-2"
                  size="lg"
                  block
                  type="submit"
                >
                  Cập nhật
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
