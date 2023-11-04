using System;
using Newtonsoft.Json;

namespace Library.TriviaDB
{
	public class GetQuestion : IGetQuestion
	{
        public async Task<QuestionModel> GetQuestionBasedOnCriteria(string criteria)
        {
            using (var client = new HttpClient())
            {
                var url = new Uri($"https://opentdb.com/api.php?amount=1&category={criteria}");

                var response = await client.GetAsync(url);

                string json;
                using (var content = response.Content)
                {
                    json = await content.ReadAsStringAsync();
                }

                return JsonConvert.DeserializeObject<QuestionModel>(json);
            }
        }
	}
}

