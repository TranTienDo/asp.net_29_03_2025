using Microsoft.AspNetCore.Mvc;
using TRANTIENDO_2122110150.Data;
using TRANTIENDO_2122110150.Model;

namespace TRANTIENDO_2122110150.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BrandApiController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BrandApiController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAllBrands()
        {
            var brands = _context.Brands.ToList();
            return Ok(brands);
        }

        [HttpGet("{id}")]
        public IActionResult GetBrandById(int id)
        {
            var brand = _context.Brands.Find(id);
            if (brand == null) return NotFound();
            return Ok(brand);
        }

        [HttpPost]
        public IActionResult CreateBrand([FromBody] Brand brand)
        {
            _context.Brands.Add(brand);
            _context.SaveChanges();
            return Ok(brand);
        }
    }
}
