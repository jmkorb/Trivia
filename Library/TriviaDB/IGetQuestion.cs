using System;
namespace Library.TriviaDB
{
	public interface IGetQuestion
    {
        Task<QuestionModel> GetQuestionBasedOnCriteria(string criteria);
    }
}

