namespace TRANTIENDO_2122110150.DTO
{
    public class ProductDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public int CategoryId { get; set; }
        public int Stock { get; set; }
        public IFormFile ImageFile { get; set; }
    }
}
