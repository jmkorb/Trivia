using System;
namespace Library
{
    public class QuestionModel
    {
        public int ResponseCode { get; set; }

        public IEnumerable<Result>? Results { get; set; }
    }
}

