using System.ComponentModel.DataAnnotations;
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
            .Select(e => GetDisplayName(e))
            .ToList();

        return Ok(categories);
    }

    private static string GetDisplayName(Category category)
    {
        var displayAttribute = typeof(Category)
            .GetField(category.ToString())
            .GetCustomAttributes(typeof(DisplayAttribute), false)
            .FirstOrDefault() as DisplayAttribute;

        return displayAttribute?.Name ?? category.ToString();
    }
}

