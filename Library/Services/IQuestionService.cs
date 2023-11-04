using System;


namespace Library.Services
{
	public interface IQuestionService
	{
		Task<QuestionModel> GetQuestionBasedOnCategory(string category);
	}
}

