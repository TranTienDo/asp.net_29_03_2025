using Microsoft.AspNetCore.Mvc;
using TRANTIENDO_2122110150.Model;
using Microsoft.EntityFrameworkCore;
using TRANTIENDO_2122110150.Data;




namespace TRANTIENDO_2122110150.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CartController(AppDbContext context)
        {
            _context = context;
        }

        // ✅ Thêm sản phẩm vào giỏ hàng
        [HttpPost("add")]
        public async Task<IActionResult> AddToCart(int userId, int productId, int quantity)
        {
            var product = await _context.Products.FindAsync(productId);
            if (product == null) return NotFound("Sản phẩm không tồn tại");

            // Kiểm tra nếu số lượng sản phẩm trong kho đủ để thêm vào giỏ hàng
            if (product.Stock < quantity)
            {
                return BadRequest("Sản phẩm không đủ số lượng trong kho");
            }

            // Tìm hoặc tạo giỏ hàng cho user
            var cart = await _context.Carts
                .Include(c => c.CartDetails)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null)
            {
                cart = new Cart { UserId = userId };
                _context.Carts.Add(cart);
                await _context.SaveChangesAsync();
            }

            // Kiểm tra sản phẩm đã có trong giỏ chưa
            var cartDetail = cart.CartDetails?.FirstOrDefault(cd => cd.ProductId == productId);

            if (cartDetail != null)
            {
                // Nếu sản phẩm đã có trong giỏ, cập nhật số lượng
                cartDetail.Quantity += quantity;
            }
            else
            {
                // Nếu sản phẩm chưa có trong giỏ, thêm mới
                cartDetail = new CartDetail
                {
                    CartId = cart.ID,
                    ProductId = productId,
                    Quantity = quantity,
                    Price = product.Price
                };
                _context.CartDetails.Add(cartDetail);
            }

            // Giảm số lượng sản phẩm trong bảng Product
            product.Stock -= quantity;

            // Cập nhật sản phẩm trong bảng Product
            _context.Products.Update(product);

            await _context.SaveChangesAsync();
            return Ok("Đã thêm vào giỏ hàng và cập nhật số lượng sản phẩm");
        }


        // ✅ Lấy giỏ hàng theo userId
        [HttpGet("get/{userId}")]
        public async Task<IActionResult> GetCart(int userId)
        {
            var cart = await _context.Carts
                .Include(c => c.CartDetails)
                .ThenInclude(cd => cd.Product)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null) return NotFound("Không có giỏ hàng");

            return Ok(cart);
        }

        // ✅ Thanh toán (chuyển từ Cart ➜ Order)
        [HttpPost("checkout/{userId}")]
        public async Task<IActionResult> Checkout(int userId)
        {
            var cart = await _context.Carts
                .Include(c => c.CartDetails)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null || cart.CartDetails == null || !cart.CartDetails.Any())
                return BadRequest("Giỏ hàng trống");

            var order = new Order
            {
                UserId = userId,
                OrderDate = DateTime.Now,
                Status = "Pending",
                TotalPrice = cart.CartDetails.Sum(cd => cd.Quantity * cd.Price),
                OrderDetails = new List<OrderDetail>()
            };

            foreach (var item in cart.CartDetails)
            {
                order.OrderDetails.Add(new OrderDetail
                {
                    ProductId = item.ProductId,
                    Quantity = item.Quantity,
                    Price = item.Price
                });
            }

            _context.Orders.Add(order);

            // Xóa giỏ hàng
            _context.CartDetails.RemoveRange(cart.CartDetails);
            _context.Carts.Remove(cart);

            await _context.SaveChangesAsync();

            return Ok("Đã thanh toán thành công");
        }
    }

}
