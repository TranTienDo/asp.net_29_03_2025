using Microsoft.AspNetCore.Mvc;
using TRANTIENDO_2122110150.Data;
using TRANTIENDO_2122110150.Model;

[ApiController]
[Route("api/[controller]")]
public class PaymentApiController : ControllerBase
{
    private readonly AppDbContext _context;

    public PaymentApiController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetAllPayments()
    {
        var data = _context.Payments.ToList();
        return Ok(data);
    }

    [HttpPost]
    public IActionResult CreatePayment([FromBody] Payment payment)
    {
        _context.Payments.Add(payment);
        _context.SaveChanges();
        return Ok(payment);
    }
}
