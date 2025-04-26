namespace TRANTIENDO_2122110150.DTO
{
    public class OrderDetailRequestDto
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
    }

    public class OrderRequestDto
    {
        public int UserId { get; set; }
        public List<OrderDetailRequestDto> OrderDetails { get; set; } = new();
    }
}
