namespace Library
{
    public class QuestionModel
    {
        public int ResponseCode { get; set; }

        public IEnumerable<ResultModel>? Results { get; set; }
    }
}

