namespace TRANTIENDO_2122110150.Model
{
    public class Payment
    {
        public int Id { get; set; }

        public string Method { get; set; } = string.Empty; // Ví dụ: "COD", "MOMO", "VNPAY"
        public string? Status { get; set; } // pending, paid, failed, etc.
        public decimal Amount { get; set; }

        public int OrderId { get; set; }
        public Order? Order { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
