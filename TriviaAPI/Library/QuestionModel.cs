using System.Runtime.Serialization;

namespace TriviaAPI.Library
{
    [DataContract]
    public class QuestionModel
    {
        [DataMember(Name = "response_code")]
        public int ResponseCode { get; set; }

        [DataMember(Name = "results")]
        public IEnumerable<ResultModel>? Results { get; set; }
    }
}

