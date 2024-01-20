using System;
using TriviaAPI.Library.Enums;


namespace TriviaAPI.Library.Services
{
	public interface IQuestionService
	{
		Task<QuestionModel> GetQuestionUsingCategory(string category);
	}
}

