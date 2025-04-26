import axios from "axios";
import React, { Component } from "react";

class CreateProduct extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      category_id: "",
      brand: "",
      description: "",
      details: "",
      photos: null,
      price: "",
      size: "",
      color: "",
      quantity: 1,
      success: false,
      error: "",
      errorKeys: [],
      categories: [], // Danh mục từ API
    };

    this.baseState = this.state;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.fileSelectHandler = this.fileSelectHandler.bind(this);
  }

  componentDidMount() {
    // Lấy danh mục từ API
    axios
      .get("https://localhost:7070/api/Category")
      .then((response) => {
        this.setState({
          categories: response.data, // Lưu danh mục vào state
          category_id: response.data[0]?.id || "", // Gán giá trị mặc định cho category_id
        });
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh mục:", error);
        alert("Không thể tải danh mục.");
      });
  }

  handleChange(event) {
    const { name, value, type } = event.target;

    if (type === "select-one" && name === "category_id") {
      this.setState({ category_id: value });
    } else {
      this.setState({ [name]: value });
    }

    if (this.state.success) {
      this.setState({ success: false });
    }
  }

  fileSelectHandler(event) {
    this.setState({ photos: event.target.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Name", this.state.name);
    formData.append("CategoryId", this.state.category_id);
    formData.append("Brand", this.state.brand);
    formData.append("Description", this.state.description);
    formData.append("Price", this.state.price);
    formData.append("Stock", this.state.quantity);
    formData.append("ImageFile", this.state.photos);

    fetch("https://localhost:7070/api/Product/create", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw errorData;
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ ...this.baseState, success: true });
      })
      .catch((error) => {
        const keys = Object.keys(error);
        this.setState({
          error: error,
          errorKeys: keys,
          success: false,
        });
      });
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.success && (
          <div className="card mb-4 py-3 border-left-success">
            <div className="card-body">Sản phẩm đã được tạo thành công.</div>
          </div>
        )}

        {this.state.error && (
          <div className="card mb-4 py-3 border-left-danger">
            <div className="card-body">
              {this.state.errorKeys.map((key) => (
                <div key={key}>
                  <i
                    style={{ color: "#e74a3b" }}
                    className="fa fa-exclamation-triangle mr-2"
                  ></i>
                  {this.state.error[key]}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Thêm 1 sản phẩm mới
            </h6>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="d-flex">
                <div className="col-xl-6">
                  <div className="form-group">
                    <label className="small mb-1">Tên sản phẩm</label>
                    <input
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      type="text"
                      placeholder="Product name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="small mb-1">Danh mục</label>
                    <select
                      className="form-control"
                      name="category_id" // Đảm bảo tên input trùng với state
                      value={this.state.category_id}
                      onChange={this.handleChange}
                    >
                      {this.state.categories.map((c) => (
                        <option value={c.id} key={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="small mb-1">Giá</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                      </div>
                      <input
                        className="form-control"
                        name="price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        type="number"
                        placeholder="Product price"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="small mb-1">Hình ảnh</label>
                    <input
                      className="form-control"
                      onChange={this.fileSelectHandler}
                      type="file"
                      style={{ paddingTop: "3px" }}
                      required
                    />
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="form-group">
                    <label className="small mb-1">Chi tiết</label>
                    <textarea
                      rows="2"
                      className="form-control"
                      name="description"
                      value={this.state.description}
                      onChange={this.handleChange}
                      placeholder="Product description"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="small mb-1">Mô tả</label>
                    <textarea
                      rows="4"
                      className="form-control"
                      name="details"
                      value={this.state.details}
                      onChange={this.handleChange}
                      placeholder="Product details"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="small mb-1">Số lượng tồn kho</label>
                    <input
                      className="form-control"
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.handleChange}
                      type="number"
                      min="1"
                      placeholder="Số lượng sản phẩm"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <button className="btn btn-primary float-right">
                  Tạo sản phẩm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProduct;
