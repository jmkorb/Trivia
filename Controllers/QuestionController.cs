using Library.Enums;
using Library.Services;
using Microsoft.AspNetCore.Mvc;

namespace Trivia.Controllers;

[ApiController]
[Route("api/[controller]")]
public class QuestionController : ControllerBase
{
    public IQuestionService _questionService;

    public QuestionController(IQuestionService questionService)
    {
        _questionService = questionService;
    }


    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var category = Category.Sports;
            var questionModel = await _questionService.GetQuestionUsingCategory(category);

            if (questionModel != null)
            {
                return Ok(questionModel);
            }
            else
            {
                return NotFound();
            }
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}

