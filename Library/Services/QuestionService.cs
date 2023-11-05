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
        public async Task<QuestionModel> GetQuestionUsingCategory(Category category)
        {
			var baseUrl = "https://opentdb.com/api.php?";
			try
			{
				var url = $"{baseUrl}amount=1&category={(int)category}";
				// Make an HTTP request to the Open Trivia Database API
				var response = await _httpClient.GetAsync(url);

				if (!response.IsSuccessStatusCode)
				{
					throw new Exception($"HTTP error! Status: {response.StatusCode}");
				}

				// Read the response content as a string
				var content = await response.Content.ReadAsStringAsync();

				// Deserialize the JSON response into a QuestionModel
				var questionModel = JsonConvert.DeserializeObject<QuestionModel>(content);

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

