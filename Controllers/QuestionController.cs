using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library;
using Library.Enums;
using Library.Services;
using Microsoft.AspNetCore.Mvc;

namespace Trivia.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionService _questionService;

        public QuestionController(IQuestionService questionService)
        {
            _questionService = questionService;
        }

        [HttpGet]
        public async Task<IActionResult> GetQuestion()
        {
            try
            {
                var category = Category.Sports;
                var questionModel = await _questionService.GetQuestionUsingCategory(category);

                if (questionModel != null)
                {
                    return Ok(questionModel.Results);
                }
                else
                {
                    return NotFound(); // Or return a suitable error response
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
