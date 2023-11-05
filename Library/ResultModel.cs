using System;
using Library.Enums;
using System.Runtime.Serialization;
using System.Xml.Linq;

namespace Library
{
    [DataContract]
    public class ResultModel
    {
        [DataMember(Name = "category")]
        public Category Category { get; set; }
        [DataMember(Name = "type")]
        public QuestionType Type { get; set; }
        [DataMember(Name = "difficulty")]
        public Difficulty Difficulty { get; set; }
        [DataMember(Name = "question")]
        public string? Question { get; set; }
        [DataMember(Name = "correct_answer")]
        public string? CorrectAnswer { get; set; }
        [DataMember(Name = "incorrect_answers")]
        public IEnumerable<string>? IncorrectAnswers { get; set; }
    }
}

