using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TRANTIENDO_2122110150.Model
{
    public class Category
    {
        public int ID { get; set; }
        public string Name { get; set; }


        public List<Product>? Products { get; set; }
    }
}
