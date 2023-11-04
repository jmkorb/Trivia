using System;
using Library.TriviaDB;

namespace Library.Services
{
	public class QuestionService : IQuestionService
	{
		private readonly IGetQuestion _getQuestion;

		public QuestionService(IGetQuestion getQuestion)
		{
			_getQuestion = getQuestion;
		}

		public async Task<QuestionModel> GetQuestionBasedOnCategory(string category)
		{
			return await _getQuestion.GetQuestionBasedOnCriteria(category);
		}
	}
}

