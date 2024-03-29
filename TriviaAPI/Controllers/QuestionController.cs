﻿using TriviaAPI.Library.Enums;
using TriviaAPI.Library.Services;
using Microsoft.AspNetCore.Mvc;

namespace Trivia.TriviaAPI.Controllers;

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
    public async Task<IActionResult> Get(string category)
    {
        try
        {
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

