using System.Text.Json.Serialization;

namespace TRANTIENDO_2122110150.Model
{
    public class CartItem
    {
        public int Id { get; set; }

        public int CartId { get; set; }

        [JsonIgnore]
        public virtual Cart Cart { get; set; }
        //public Cart Cart { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }

        public int Quantity { get; set; } // Số lượng sản phẩm trong giỏ

        public decimal Price { get; set; } // Giá sản phẩm tại thời điểm thêm vào giỏ
    }
}
