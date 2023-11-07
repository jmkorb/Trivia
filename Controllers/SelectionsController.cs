using Library.Enums;
using Microsoft.AspNetCore.Mvc;

namespace Trivia.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SelectionsController : ControllerBase
{
    [HttpGet]
    [Route("categories")]
    public IActionResult GetCategories()
    {
        var categories = Enum.GetValues(typeof(Category))
            .Cast<Category>()
            .Select(c => c.ToString())
            .ToList();

        return Ok(categories);
    }
}

