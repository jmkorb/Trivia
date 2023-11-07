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
        var categories = Enum.GetNames(typeof(Category))
            .ToList();

        return Ok(categories);
    }
}

