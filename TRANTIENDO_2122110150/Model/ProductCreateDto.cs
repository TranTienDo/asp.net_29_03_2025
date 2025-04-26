namespace TRANTIENDO_2122110150.Model
{
    public class ProductCreateDto
    {
        public string Name { get; set; }
        public double Price { get; set; }
        public int CategoryID { get; set; }
        public IFormFile? Image { get; set; }
    }

}
