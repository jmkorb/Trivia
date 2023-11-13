using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Library.Enums
{
    public enum Category
    {
        [EnumMember(Value = "General Knowledge")]
        [Display(Name="General Knowledge")]
        GeneralKnowledge = 9,
        [EnumMember(Value = "Entertainment: Books")]
        Books = 10,
        [EnumMember(Value = "Entertainment: Film")]
        Film = 11,
        [EnumMember(Value = "Entertainment: Music")]
        Music = 12,
        [EnumMember(Value = "Entertainment: Musicals & Theatres")]
        [Display(Name="Musicals and Theater")]
        MusicalsAndTheater = 13,
        [EnumMember(Value = "Entertainment: Television")]
        Television = 14,
        [EnumMember(Value = "Entertainment: Video Games")]
        [Display(Name="Video Games")]
        VideoGames = 15,
        [EnumMember(Value = "Entertainment: Board Games")]
        [Display(Name="Board Games")]
        BoardGames = 16,
        [EnumMember(Value = "Science & Nature")]
        [Display(Name="Science and Nature")]
        ScienceAndNature = 17,
        [EnumMember(Value = "Science: Computers")]
        Computers = 18,
        [EnumMember(Value = "Science: Mathematics")]
        Mathematics = 19,
        [EnumMember(Value = "Mythology")]
        Mythology = 20,
        [EnumMember(Value = "Sports")]
        Sports = 21,
        [EnumMember(Value = "Geography")]
        Geography = 22,
        [EnumMember(Value = "History")]
        History = 23,
        [EnumMember(Value = "Politics")]
        Politics = 24,
        [EnumMember(Value = "Art")]
        Art = 25,
        [EnumMember(Value = "Celebrities")]
        Celebrities = 26,
        [EnumMember(Value = "Animals")]
        Animals = 27,
        [EnumMember(Value = "Vehicles")]
        Vehicles = 28,
        [EnumMember(Value = "Entertainment: Comics")]
        Comics = 29,
        [EnumMember(Value = "Science: Gadgets")]
        Gadgets = 30,
        [EnumMember(Value = "Entertainment: Japanese Anime & Manga")]
        [Display(Name="Anime and Manga")]
        AnimeAndManga = 31,
        [EnumMember(Value = "Entertainment: Cartoon & Animations")]
        Cartoons = 32

    }
}
