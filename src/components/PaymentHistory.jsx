import React from 'react';

function PaymentHistory() {
    return (
        <div className="container">
            <h2>Lịch Sử Thanh Toán</h2>

            {/* Hiển thị thông báo không có dữ liệu */}
            <div className="alert alert-info">
                Hiện tại không có lịch sử thanh toán.
            </div>

            {/* Bảng hiển thị tĩnh */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th> {/* Cột cho số thứ tự */}
                        <th>Số tiền</th>
                        <th>Phương thức thanh toán</th>
                        <th>Trạng thái</th>
                        {/* <th>Ngày thanh toán</th> */}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="4" className="text-center">Không có dữ liệu lịch sử thanh toán</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PaymentHistory;
