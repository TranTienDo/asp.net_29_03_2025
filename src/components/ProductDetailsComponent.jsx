import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

const ProductDetailsComponent = () => {
  const [selectedSize, setSelectedSize] = useState('M'); 
  const [selectedColor, setSelectedColor] = useState('Xanh'); 
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: 'Đồng hồ 1',
    description: 'Đây là mô tả sản phẩm. Sản phẩm này có chất lượng tuyệt vời và tính năng vượt trội.',
    price: '1.200.000 đ',
    photo: 'popular1.png',
  };

  const stocks = [
    { id: 1, size: 'S', color: 'Đỏ' },
    { id: 2, size: 'M', color: 'Xanh' },
    { id: 3, size: 'L', color: 'Vàng' },
  ];

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Vui lòng chọn size và màu sắc trước khi thêm vào giỏ hàng.');
      return;
    }
    console.log('Đã thêm sản phẩm vào giỏ hàng:', {
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    });
  };

  return (
    <div>
      <div className="slider-area">
        <div className="single-slider slider-height2 d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>Chi tiết sản phẩm</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product_image_area">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={6} md={6}>
              <div className="product_img_slide">
                <img
                  src={`/assets/img/gallery/${product.photo}`} 
                  alt={product.name}
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="single_product_text text-center">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <h4>Giá: {product.price}</h4>

                <Form.Group>
                  <Form.Label>Chọn size</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="">Chọn size</option>
                    {stocks.map(stock => (
                      <option key={stock.id} value={stock.size}>{stock.size}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Chọn màu</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    <option value="">Chọn màu</option>
                    {stocks.map(stock => (
                      <option key={stock.id} value={stock.color}>{stock.color}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Số lượng</Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                    style={{ width: '100px' }}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  className="mt-3"
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <section className="subscribe_part section_padding">
        <div className="container">
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="subscribe_part_content text-center">
                <h2>Nhận thông tin khuyến mãi & cập nhật!</h2>
                <p>Đăng ký để nhận thông tin về sản phẩm mới và khuyến mãi.</p>
                <Form inline className="subscribe_form">
                  <Form.Control type="email" placeholder="Nhập email của bạn" className="mr-2" />
                  <Button className="btn_1">Đăng ký</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsComponent;
