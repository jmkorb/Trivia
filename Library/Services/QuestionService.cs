using System.Net;
using Library.Enums;
using Newtonsoft.Json;

namespace Library.Services
{
	public class QuestionService : IQuestionService
	{
        private readonly HttpClient _httpClient;

		public QuestionService(HttpClient httpClient)
		{
			_httpClient = httpClient;
		}

		private static void DecodeQuestionResults(QuestionModel questionModel){
			foreach (var result in questionModel.Results)
			{
				result.Question = WebUtility.HtmlDecode(result.Question);

				if (result.Type != QuestionType.TrueOrFalse && result.IncorrectAnswers != null)
				{
					result.CorrectAnswer = WebUtility.HtmlDecode(result.CorrectAnswer);
					result.IncorrectAnswers = result.IncorrectAnswers.Select(WebUtility.HtmlDecode);
				}
			}
		}

        public async Task<QuestionModel> GetQuestionUsingCategory(string category)
        {
			var baseUrl = "https://opentdb.com/api.php?";
			try
			{
				var selectedCategory = 0;

       			if(Enum.TryParse(category, true, out Category searchCategory))
					selectedCategory = (int)searchCategory;

				var url = $"{baseUrl}amount=1&category={selectedCategory}";

				var response = await _httpClient.GetAsync(url);

				if (!response.IsSuccessStatusCode)
				{
					throw new Exception($"HTTP error! Status: {response.StatusCode}");
				}

				var content = await response.Content.ReadAsStringAsync();
				var questionModel = JsonConvert.DeserializeObject<QuestionModel>(content);
				if(questionModel == null)
					return new QuestionModel();
				else
					DecodeQuestionResults(questionModel);
					return questionModel;
			}
			catch (Exception ex)
			{
				// Handle or log any exceptions
				throw new Exception("Failed to fetch data from the API.", ex);
			}
        }
	}
}

