import React from 'react';

const AboutComponent = () => {
  return (
    <div>
      {/* Hero Area */}
     
      
      {/* About Details Start */}
      <div className="about-details section-padding30">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-lg-8">
              <div className="about-details-cap mb-50">
                <h4>Sứ Mệnh Của Chúng Tôi</h4>
                <p>Chúng tôi cam kết mang đến những sản phẩm và dịch vụ tốt nhất, đồng hành cùng khách hàng trên hành trình tìm kiếm sự hoàn hảo. Chúng tôi không chỉ bán sản phẩm, mà còn xây dựng một cộng đồng gắn kết và chia sẻ giá trị bền vững.</p>
                <p>Với sứ mệnh phục vụ khách hàng một cách tận tâm, chúng tôi không ngừng cải tiến và phát triển để đáp ứng nhu cầu ngày càng cao của thị trường. Sự hài lòng của khách hàng là mục tiêu chính của chúng tôi.</p>
              </div>
              <div className="about-details-cap mb-50">
                <h4>Tầm Nhìn Của Chúng Tôi</h4>
                <p>Chúng tôi hướng đến việc trở thành thương hiệu tiên phong trong ngành, với những sản phẩm sáng tạo và đột phá. Tầm nhìn của chúng tôi là không ngừng đổi mới và sáng tạo để mang lại sự hài lòng tuyệt đối cho khách hàng, giúp họ nâng cao chất lượng cuộc sống.</p>
                <p>Với mỗi sản phẩm chúng tôi mang đến, chúng tôi muốn tạo ra những giá trị lâu dài và có ảnh hưởng tích cực đến cộng đồng và xã hội.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Details End */}

      {/* Video Area Start */}
      <div className="video-area mb-100">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="video-wrap">
                <div className="play-btn">
                  <a className="popup-video" href="https://www.youtube.com/watch?v=KMc6DyEJp04" aria-label="Xem video giới thiệu">
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Arrow */}
          <div className="thumb-content-box">
            <div className="thumb-content">
              <h3>Khám Phá Video Tiếp Theo</h3>
              <a href="#" aria-label="Xem video tiếp theo">
                <i className="flaticon-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area End */}

      {/* Shop Method Start */}
      <div className="shop-method-area">
        <div className="container">
          <div className="method-wrapper">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-method mb-40">
                  <i className="ti-package" />
                  <h6>Phương Thức Giao Hàng Miễn Phí</h6>
                  <p>Chúng tôi cung cấp giao hàng miễn phí cho tất cả các đơn hàng trong phạm vi nội thành. Các đơn hàng ngoại thành có thể được miễn phí tùy theo điều kiện.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-method mb-40">
                  <i className="ti-unlock" />
                  <h6>Hệ Thống Thanh Toán An Toàn</h6>
                  <p>Với các phương thức thanh toán qua thẻ tín dụng, ví điện tử, và thanh toán khi nhận hàng, bạn hoàn toàn có thể yên tâm về sự an toàn và bảo mật khi mua sắm.</p>
                </div>
              </div> 
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single-method mb-40">
                  <i className="ti-reload" />
                  <h6>Chính Sách Hoàn Trả Dễ Dàng</h6>
                  <p>Chúng tôi cung cấp chính sách hoàn trả linh hoạt trong vòng 30 ngày, giúp bạn cảm thấy an tâm khi mua sắm.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Method End */}
    </div>
  );
};

export default AboutComponent;
