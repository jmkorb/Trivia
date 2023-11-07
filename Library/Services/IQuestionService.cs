using System;
using Library.Enums;


namespace Library.Services
{
	public interface IQuestionService
	{
		Task<QuestionModel> GetQuestionUsingCategory(string category);
	}
}

