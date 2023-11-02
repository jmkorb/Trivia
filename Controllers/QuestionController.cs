using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Trivia.Controllers
{
    [Route("api/[controller]")]
    public class QuestionController : Controller
    {
        private readonly IQuestionService _questionService;

        public QuestionController(IQuestionService questionService)
        {
            _questionService = questionService;
        }

        // GET: api/values
        [HttpGet]
        [Route("v1/question/category/{category}")]
        public async Task<IHttpActionResult> GetQuestions(string category)
        {
            var result = await _questionService.GetQuestionBasedOnCategory(category);

            return Ok(result);
        }
    }
}
