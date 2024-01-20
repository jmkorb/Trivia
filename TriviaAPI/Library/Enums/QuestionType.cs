using System;
using System.Runtime.Serialization;

namespace TriviaAPI.Library.Enums
{
    public enum QuestionType
    {
        [EnumMember(Value = "multiple")]
        MultipleChoice = 1,
        [EnumMember(Value = "boolean")]
        TrueOrFalse = 2
    }
}


