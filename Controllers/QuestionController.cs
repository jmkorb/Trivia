using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library;
using Library.Services;
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

        [HttpGet]
        public async Task<QuestionModel> GetQuestions(string categoryNumber)
        {
            var result = await _questionService.GetQuestionBasedOnCategory(categoryNumber);

            return result;
        }
    }
}
