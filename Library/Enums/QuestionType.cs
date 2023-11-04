using System;
using System.Runtime.Serialization;

namespace Library.Enums
{
    public enum QuestionType
    {
        [EnumMember(Value = "multiple")]
        MultipleChoice = 1,
        [EnumMember(Value = "boolean")]
        TrueOrFalse = 2
    }
}


